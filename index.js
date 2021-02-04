require("dotenv").config();
const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}! caca`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
    msg.send(msg);
  }
});

client.login(process.env.BOT_TOKEN);
