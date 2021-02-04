require("dotenv").config();
const lessons = require("./lessons");
const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "!";
const group = "";

// get which current lesson there is
const date = new Date();
const hours = date.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});
const lesson = (my_group) => {
  switch (date.getDay()) {
    //sunday
    case 0:
      if (hours >= "08:30" && hours < "10:15") {
        my_group ? lessons.hebrew : lessons.gemara;
      } else if (hours >= "10:15" && hours < "12:00") {
        my_group ? lessons.gemara : lessons.hebrew;
      } else if (hours >= "12:00" && hours < "14:00") {
        return lessons.math;
      } else if (hours >= "14:00" && hours < "16:00") {
        my_group ? lessons.english_nakar : lessons.english_nourit;
      } else if (hours >= "16:00" && hours <= "18:40") {
        return lessons.programming;
      }
      break;
    //monday
    case 1:
      if (hours >= "08:30" && hours < "10:15") {
        return lessons.gemara;
      } else if (hours >= "10:15" && hours < "11:15") {
        return lessons.history_itsik;
      } else if (hours >= "11:15" && hours < "12:00") {
        return lessons.literature;
      } else if (hours >= "12:00" && hours < "13:15") {
        return lessons.torah_dov;
      } else if (hours >= "13:15" && hours < "14:0") {
        my_group ? lessons.english_nakar : lessons.english_nourit;
      } else if (hours >= "16:00" && hours <= "18:40") {
        return lessons.programming;
      }
      break;
    //tuesday
    case 2:
      if (hours >= "08:30" && hours < "9:30") {
        my_group ? lessons.history_tsipi : lessons.history_itsik;
      } else if (hours >= "9:30" && hours < "10:15") {
        my_group ? lessons.torah_rabinak : lessons.history_tsipi;
      } else if (hours >= "10:15" && hours < "11:15") {
        my_group ? lessons.history_itsik : lessons.torah_rabinak;
      } else if (hours >= "12:00" && hours < "16:00") {
        return lessons.physics;
      }
      break;
    //wednesday
    case 3:
      if (hours >= "08:30" && hours < "10:15") {
        return lessons.math;
      } else if (hours >= "10:15" && hours < "11:15") {
        return lessons.literature;
      } else if (hours >= "11:15" && hours < "12:00") {
        return lessons.gemara;
      } else if (hours >= "12:00" && hours < "16:00") {
        return lessons.programming;
      }
      break;
    //thursday
    case 4:
      if (hours >= "09:30" && hours < "10:15") {
        return lessons.gemara;
      } else if (hours >= "10:15" && hours < "11:15") {
        return lessons.history_itsik;
      } else if (hours >= "12:00" && hours <= "16:00") {
        return lessons.physics;
      }
      break;
    // no class
    default:
      return "No class for now";
  }
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  const args = msg.content.trim().split(/ +/g);
  const command = args[0].slice(prefix.length).toLowerCase();

  if (msg.channel.id === "806946043899936799") {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    if (command === "ping") {
      msg.channel.send("pong");
    }

    if (command === "lessons") {
      if (args[1] === "gr1") {
        return msg.reply(lesson(true));
      } else if (args[1] === "gr2") {
        return msg.reply(lesson(false));
      } else {
        msg.channel.send(`You need to write ${prefix}lesson gr1/gr2`);
      }
    }
  }
});

client.login(process.env.BOT_TOKEN);
