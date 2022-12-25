const Discord = require("discord.js");
require("dotenv").config();
const pingPong = require("./routes/pingPong.js");

const client = new Discord.Client({
  intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent],
});

client.on("messageCreate", async (message) => {
  console.log(message.content)
  if (message.content === "ping") pingPong(message);
});

client.login(process.env.DISCORD_SECRET);
