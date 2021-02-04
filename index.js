require("dotenv").config();
require("lessons");
const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "!";

// get which current lesson there is
const date = new Date();

sunday = date.getDay() == 0;
monday = date.getDay() == 1;
tuesday = date.getDay() == 2;
wednesday = date.getDay() == 3;
thursday = date.getDay() == 4;

const lesson = () => {
  lessons = {};
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.channel.id === "805852579161833572") {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content.startsWith(`${prefix}lesson`)) {
      message.channel.send(lesson());
    }
  }
});

client.login(process.env.BOT_TOKEN);
