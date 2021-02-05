const lessons = require("./lessons");
const dayjs = require("dayjs");

const day = dayjs().format("dddd");
const hours = dayjs().format("HH:mm");

// lesson links
module.exports = {
  hebrew:
    "https://us04web.zoom.us/j/77765386769?pwd:UE51NmNjL2Y1elNlMW0rcXJyUkNWZz09",

  gemara: "https://edu-il.zoom.us/j/2960827055",

  math:
    "https://edu-il.zoom.us/j/3198379053?pwd:elcrU1Nxb3hpaGNOQzVBNzhiOHR4Zz09",

  english_nakar: "https://edu-il.zoom.us/j/6259151077",

  english_nourit:
    "https://edu-il.zoom.us/j/4986899586?pwd:bTlKd00yc1Iyd20wUWNoREF4bG5lQT09",

  programming:
    "https://edu-il.zoom.us/j/7184928368?pwd:cmZ5Sm9BdXdtWEcrcFBWN0pRRlZjUT09",

  history_itsik: "https://edu-il.zoom.us/j/3136023920",

  literature:
    "https://edu-il.zoom.us/j/9655244107?pwd:c1h5RGNyYUs5QndDUHpqTFMyUmFqUT09",

  torah_dov: "https://edu-il.zoom.us/j/3935560602",

  history_tsipi: "https://edu-il.zoom.us/j/5238947742",

  torah_rabinak:
    "https://edu-il.zoom.us/j/3422464676?pwd:aUlOWFFjUEx0ak5yalFpTjBHdU1Xdz09",

  physics: "https://zoom.us/j/98729071010?pwd:ajVBbU13bHBqdmhCemlqQWV2aEZFUT09",

  lesson: (my_group) => {
    switch (day) {
      //sunday
      case "Sunday":
        if (hours >= "08:30" && hours < "10:15") {
          return my_group ? lessons.hebrew : lessons.gemara;
        } else if (hours >= "10:15" && hours < "12:00") {
          return my_group ? lessons.gemara : lessons.hebrew;
        } else if (hours >= "12:00" && hours < "14:00") {
          return lessons.math;
        } else if (hours >= "14:00" && hours < "16:00") {
          return my_group ? lessons.english_nakar : lessons.english_nourit;
        } else if (hours >= "16:00" && hours <= "18:40") {
          return lessons.programming;
        }
        break;
      //monday
      case "Monday":
        if (hours >= "08:30" && hours < "10:15") {
          return lessons.gemara;
        } else if (hours >= "10:15" && hours < "11:15") {
          return lessons.history_itsik;
        } else if (hours >= "11:15" && hours < "12:00") {
          return lessons.literature;
        } else if (hours >= "12:00" && hours < "13:15") {
          return lessons.torah_dov;
        } else if (hours >= "13:15" && hours < "14:0") {
          return my_group ? lessons.english_nakar : lessons.english_nourit;
        } else if (hours >= "16:00" && hours <= "18:40") {
          return lessons.programming;
        }
        break;
      //tuesday
      case "Tuesday":
        if (hours >= "08:30" && hours < "9:30") {
          return my_group ? lessons.history_tsipi : lessons.history_itsik;
        } else if (hours >= "9:30" && hours < "10:15") {
          return my_group ? lessons.torah_rabinak : lessons.history_tsipi;
        } else if (hours >= "10:15" && hours < "11:15") {
          return my_group ? lessons.history_itsik : lessons.torah_rabinak;
        } else if (hours >= "12:00" && hours < "16:00") {
          return lessons.physics;
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
      case "Friday":
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
  },
};
