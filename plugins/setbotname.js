let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `اسم البوت؟`
  try {
    await conn.updateProfileName(text)
    m.reply('😃 تم تغيير الاسم بنجاح !')
  } catch (e) {
    console.log(e)
    throw `واجهت خطأ في تغيير الاسم`
  }
}
handler.help = ['setbotname']
handler.tags = ['owner']
handler.command = /^(اسم-البوت)$/i

handler.owner = true

export default handler
