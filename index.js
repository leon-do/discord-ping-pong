const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({
  intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent],
});

client.on("messageCreate", async (message) => {
  if (message.content === "ping") {
    const reply = await message.reply(`🏓`);
    await reply.react("✅");
    await reply.react("❌");
  }
});

client.login(process.env.DISCORD_SECRET);
