async function pingPong(message) {
  const reply = await message.reply(`🏓`);
  await reply.react("✅");
  await reply.react("❌");
}

module.exports = pingPong;
