async function pingPong(message) {
  const reply = await message.reply(`🏓 <@${message.author.id}>`);
  await reply.react("✅");
  await reply.react("❌");
}

module.exports = pingPong;
