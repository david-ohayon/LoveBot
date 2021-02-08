//helpers imports
require("dotenv").config();
const dayjs = require("dayjs");
//discord imports
const lessons = require("./lessons");
const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "!";

// get which current lesson there is
let day = dayjs().format("dddd");
let hours = `${parseInt(dayjs().format("HH")) + 2}:${dayjs().format("mm")}`;
const lesson = (
  grade,
  sunday_group,
  tuesday_group,
  english_group,
  option,
  cs
) => {
  // grade - kita
  // sunday_group - kapsula be rishon
  // tuesday_group - kapsula be shlishi
  // english_group - nakar / nourit
  switch (day) {
    //sunday
    case "Sunday":
      if (hours >= "08:30" && hours < "10:15") {
        if (grade === 1) {
          if (sunday_group === "a") {
            return `${lessons.hebrew} :עברית`;
          } else if (sunday_group === "b") {
            return `${lessons.gemara} :תלמוד`;
          }
        } else if (grade === 2) {
          if (sunday_group === "a") {
            return ``;
          } else if (sunday_group === "b") {
            return ``;
          }
        }
      } else if (hours >= "10:15" && hours < "12:00") {
        if (grade === 1) {
          if (sunday_group === "a") {
            return `${lessons.gemara} :תלמוד`;
          } else if (sunday_group === "b") {
            return `${lessons.hebrew} :עברית`;
          }
        } else if (grade === 2) {
          if (sunday_group === "a") {
            return ``;
          } else if (sunday_group === "b") {
            return ``;
          }
        }
      } else if (hours >= "12:00" && hours < "14:00") {
        if (grade === 1) {
          return `${lessons.math} :מתמטיקה(5)`;
        } else if (grade === 2) {
          return ``;
        }
      } else if (hours >= "14:00" && hours < "16:00") {
        if (english_group === "a") {
          return `${lessons.english_nakar} :אנגלית(5-א) נקאר מרים`;
        } else if (english_group === "b") {
          `${lessons.english_nourit} :אנגלית(5-ב) פריד נורית`;
        }
      } else if (hours >= "16:00" && hours <= "18:40") {
        if (cs === 1) {
          return `${lessons.programming} :מדמ"ח(5)`;
        }
      }
      break;
    //monday
    case "Monday":
      if (hours >= "08:30" && hours < "10:15") {
        if (grade === 1) {
          return `${lessons.gemara} :תלמוד`;
        } else if (grade === 2) {
          return ``;
        }
      } else if (hours >= "10:15" && hours < "11:15") {
        if (grade === 1) {
          return `${lessons.history_itsik} :היסטוריה הרב שמש`;
        } else if (grade === 2) {
          return ``;
        }
      } else if (hours >= "11:15" && hours < "12:00") {
        return `${lessons.literature} :ספרות`;
      } else if (hours >= "12:00" && hours < "13:15") {
        return `${lessons.torah_dov} :תנ"ך הרב דב`;
      } else if (hours >= "13:15" && hours < "14:0") {
        if (english_group === "a") {
          return `${lessons.english_nakar} :אנגלית(5-א) נקאר מרים`;
        } else if (english_group === "b") {
          `${lessons.english_nourit} :אנגלית(5-ב) פריד נורית`;
        }
      } else if (hours >= "16:00" && hours <= "18:40") {
        if (cs === 1) {
          return `${lessons.programming} :מדמ"ח(5)`;
        }
      }
      break;
    //tuesday
    case "Tuesday":
      if (hours >= "08:30" && hours < "9:30") {
        if (tuesday_group === "a") {
          return `${lessons.history_tsipi}`;
        } else if (tuesday_group === "b") {
          return `${lessons.history_itsik}`;
        }
      } else if (hours >= "9:30" && hours < "10:15") {
        if (tuesday_group === "a") {
          return `${lessons.torah_rabinak}`;
        } else if (tuesday_group === "b") {
          return `${lessons.history_tsipi}`;
        }
      } else if (hours >= "10:15" && hours < "11:15") {
        if (tuesday_group === "a") {
          return `${lessons.history_itsik}`;
        } else if (tuesday_group === "b") {
          return `${lessons.torah_rabinak}`;
        }
      } else if (hours >= "12:00" && hours < "16:00") {
        if (option === "a") {
          return `${lessons.physics}`;
        } else if (options === "b") {
          return ``;
        }
      }
      break;
    //wednesday
    case "Wednesday":
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
    case "Thursday":
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
  const cmd = args[0].slice(prefix.length).toLowerCase();

  if (
    msg.channel.id === "806946043899936799" ||
    msg.channel.id === "807571643546992692"
  ) {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    if (cmd === "lessons" || cmd === "classes" || cmd === "שיעורים") {
      msg.channel.send(`${day} ${hours}`);
    }

    if (cmd === "lesson" || cmd === "class" || cmd === "שיעור") {
      if (msg.author.id === "448837722778632192") {
        // david
        msg.reply(lesson(1, "a", "a", "a", "a", 1));
      } else if (msg.author.id === "435508604489957377") {
        // mendel
        msg.reply(lesson(1, "b", "a", "b", "a", 1));
      } else if (msg.author.id === "801106605658865705") {
        // daniel
        msg.reply(lesson(1, "b", "b", "b", "a", 1));
      }
      // if (args[1] === "gr1")
    }
  }
});

client.login(process.env.BOT_TOKEN);
