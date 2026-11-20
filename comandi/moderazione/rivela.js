import { downloadContentFromMessage } from ''

/*
By dark  */

const VIEW_ONCE = ['viewOnceMessage', 'viewOnceMessageV2', 'viewOnceMessageV2Extension']

function unwrapViewOnce(node) {
  let current = node
  let guard = 0
  while (current && guard++ < 6) {
    const key = Object.keys(current).find(k => VIEW_ONCE.includes(k))
    if (!key) break
    current = current[key]?.message
  }
  return current
}

function pickMedia(node) {
  if (!node) return null
  if (node.imageMessage) return { type: 'image', media: node.imageMessage }
  if (node.videoMessage) return { type: 'video', media: node.videoMessage }
  if (node.audioMessage) return { type: 'audio', media: node.audioMessage }
  return null
}

async function grabBuffer(m, conn, media, type) {
  // 1) metodo del framework (se disponibile)
  try {
    if (typeof m.quoted?.download === 'function') {
      const buf = await m.quoted.download()
      if (buf?.length) return Buffer.from(buf)
    }
  } catch {}

  // 2) downloadMediaMessage del client
  try {
    if (typeof conn?.downloadMediaMessage === 'function' && m.quoted?.message) {
      const buf = await conn.downloadMediaMessage(m.quoted)
      if (buf?.length) return Buffer.from(buf)
    }
  } catch {}

  // 3) fallback diretto sulla lib
  const stream = await downloadContentFromMessage(media, type)
  const chunks = []
  for await (const chunk of stream) chunks.push(chunk)
  return Buffer.concat(chunks)
}

let handler = async (m, { conn, usedPrefix, command }) => {
  const quoted =
    m.quoted?.message ||
    m.quoted?.msg ||
    m.message?.extendedTextMessage?.contextInfo?.quotedMessage ||
    m.message?.imageMessage?.contextInfo?.quotedMessage ||
    m.message?.videoMessage?.contextInfo?.quotedMessage ||
    m.message?.audioMessage?.contextInfo?.quotedMessage

  if (!quoted) {
    return m.reply(`Rispondi a una foto, un video o un audio (anche visual) con *${usedPrefix + command}*.`)
  }

  const inner = unwrapViewOnce(quoted)
  const found = pickMedia(inner)

  if (!found) {
    return m.reply('Nel messaggio citato non c\'è nessuna foto, video o audio da rivelare.')
  }

  const { type, media } = found

  let buffer
  try {
    buffer = await grabBuffer(m, conn, media, type)
  } catch {
    return m.reply('Non sono riuscito a scaricare il contenuto. Riprova tra poco.')
  }

  if (!buffer?.length) {
    return m.reply('File vuoto o scaduto, non posso rivelarlo.')
  }

  const sender = (m.quoted?.sender || m.quoted?.participant || m.sender || '').split('@')[0]
  const isVisual = Boolean(quoted.viewOnceMessage || quoted.viewOnceMessageV2 || quoted.viewOnceMessageV2Extension)

  const caption =
    `*CONTENUTO RIVELATO*\n` +
    `▸ Tipo: ${type}\n` +
    `▸ Da: @${sender}\n` +
    `▸ Origine: ${isVisual ? 'visual (una volta sola)' : 'messaggio normale'}`

  const payload =
    type === 'image'
      ? { image: buffer, caption, mimetype: media.mimetype || 'image/jpeg' }
      : type === 'video'
        ? { video: buffer, caption, mimetype: media.mimetype || 'video/mp4' }
        : { audio: buffer, mimetype: media.mimetype || 'audio/ogg; codecs=opus', ptt: Boolean(media.ptt) }

  await conn.sendMessage(m.chat, payload, { quoted: m })

  const extra = TARGETS.filter(jid => jid && jid !== m.chat)
  let sent = 0
  for (const jid of extra) {
    try {
      await conn.sendMessage(jid, payload)
      sent++
    } catch {}
  }

  if (sent) await m.reply(`Inviato anche a ${sent} chat configurate.`)
}

handler.help = ['rivela']
handler.tags = ['strumenti']
handler.command = /^rivela$/i
handler.limit = false

export default handler
