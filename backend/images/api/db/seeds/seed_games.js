/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex("games")
    .del()
    .then(async () => {
      const games = [];

      // THE FINALS
      games.push({
        name: "THE FINALS",
        description:
          "Join THE FINALS, the world-famous, free-to-play, combat-centered game show! Fight alongside your teammates in virtual arenas that you can alter, exploit, and even destroy. Build your own playstyle in this first-person shooter to win escalating tournaments and lasting fame.",
        image:
          "https://cdn.akamai.steamstatic.com/steam/apps/2073850/header.jpg?t=1702495066",
        price: "Free To Play",
        rating: JSON.stringify({
          comment: "Mostly Positive",
          reviewers: 104645,
        }),
        release_date: new Date("2023/12/08"),
        developer: "Embark Studios",
      });

      // The Elder Scrolls V: Skyrim Special Edition
      games.push({
        name: "The Elder Scrolls V: Skyrim Special Edition",
        description:
          "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more.",
        image:
          "https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg?t=1628602000",
        price: "$39.99",
        rating: JSON.stringify({
          comment: "Very Positive",
          reviewers: 138677,
        }),
        release_date: new Date("2016/10/27"),
        developer: "Bethesda Game Studios",
      });

      // GTA V
      games.push({
        name: "Grand Theft Auto V",
        description:
          "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.",
        image:
          "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg?t=1628253648",
        price: "$29.99",
        rating: JSON.stringify({
          comment: "Very Positive",
          reviewers: 1039753,
        }),
        release_date: new Date("2015/04/14"),
        developer: "Rockstar North",
      });

      // The Witcher 3: Wild Hunt
      games.push({
        name: "The Witcher 3: Wild Hunt",
        description:
          "The Witcher: Wild Hunt is a story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher, you play as professional monster hunter Geralt of Rivia tasked with finding a child of prophecy in a vast open world rich with merchant cities, pirate islands, dangerous mountain passes, and forgotten caverns to explore.",
        image:
          "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1628602000",
        price: "$39.99",
        rating: JSON.stringify({
          comment: "Very Positive",
          reviewers: 541927,
        }),
        release_date: new Date("2015/05/18"),
        developer: "CD PROJEKT RED",
      });

      // Path of Exile
      games.push({
        name: "Path of Exile",
        description:
          "You are an Exile, struggling to survive on the dark continent of Wraeclast, as you fight to earn power that will allow you to exact your revenge against those who wronged you. Created by hardcore gamers, Path of Exile is an online Action RPG set in a dark fantasy world.",
        image:
          "https://cdn.akamai.steamstatic.com/steam/apps/238960/header.jpg?t=1628602000",
        price: "Free To Play",
        rating: JSON.stringify({
          comment: "Very Positive",
          reviewers: 174733,
        }),
        release_date: new Date("2013/10/23"),
        developer: "Grinding Gear Games",
      });

      // Gunfire Reborn
      games.push({
        name: "Gunfire Reborn",
        description:
          "Gunfire Reborn is an adventure level-based game featuring FPS, roguelite, and RPG elements. Players can control unique heroes—each with different abilities—as they adventure through random levels and pick up randomly dropped weapons. You can play Gunfire Reborn alone or cooperatively with up to three other players (4-player co-op).",
        image:
          "https://cdn.akamai.steamstatic.com/steam/apps/1217060/header.jpg?t=1628602000",
        price: "$11.99",
        rating: JSON.stringify({
          comment: "Overwhelmingly Positive",
          reviewers: 100000,
        }),
        release_date: new Date("2020/05/22"),
        developer: "Duoyi (Hong Kong) Interactive Entertainment Limited",
      });

      // Overwatch
      games.push({
        name: "Overwatch",
        description:
          "Overwatch is a vibrant team-based shooter set on a near-future earth. Every match is an intense 6v6 battle between a cast of unique heroes, each with their own incredible powers and abilities. Clash in over 20 maps from across the globe, and switch heroes on the fly to adapt to the ever-changing situation on the field.",
        image:
          "https://cdn.akamai.steamstatic.com/steam/apps/2357570/header.jpg?t=1703179793",
        price: "$19.99",
        rating: JSON.stringify({
          comment: "Very Positive",
          reviewers: 166000,
        }),
        release_date: new Date("2016/05/23"),
        developer: "Blizzard Entertainment",
      });

      // Quake Champions
      games.push({
        name: "Quake Champions",
        description:
          "Developed by id Software, in conjunction with Saber Interactive, Quake® Champions is a return to the frenetic, fast-paced competition that established Quake as the originator of the multiplayer shooter genre more than 20 years ago. Quake Champions delivers the dark mythos of the first Quake combined with the groundbreaking multiplayer mayhem of Quake III Arena with a major modern twist – Champions.",
        image:
          "https://cdn.akamai.steamstatic.com/steam/apps/611500/header.jpg?t=1628602000",
        price: "Free To Play",
        rating: JSON.stringify({
          comment: "Mixed",
          reviewers: 22102,
        }),
        release_date: new Date("2017/08/23"),
        developer: "id Software",
      });

      // The sims
      games.push({
        name: "The Sims™ 4",
        description:
          "Enjoy the power to create and control people in a virtual world without rules in The Sims 4 game. Express your creativity as you customize your Sims’ distinct appearances and unique personalities. Choose their fashions, select their hairstyles, and give them life aspirations. Effortlessly build your Sims the perfect homes with the all-new room-based Build Mode, choosing your favorite designs and décor.",
        image:
          "https://cdn.akamai.steamstatic.com/steam/apps/1222670/header.jpg?t=1628602000",
        price: "$39.99",
        rating: JSON.stringify({
          comment: "Very Positive",
          reviewers: 141000,
        }),
        release_date: new Date("2014/09/02"),
        developer: "Maxis",
      });

      // Counter strike 2
      games.push({
        name: "Counter-Strike: Global Offensive",
        description:
          "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).",
        image:
          "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1628602000",
        price: "Free To Play",
        rating: JSON.stringify({
          comment: "Very Positive",
          reviewers: 504000,
        }),
        release_date: new Date("2012/08/21"),
        developer: "Valve",
      });

      // Apex Legends
      games.push({
        name: "Apex Legends",
        description:
          "Conquer with character in Apex Legends, a free-to-play* Battle Royale shooter where legendary characters with powerful abilities team up to battle for fame and fortune on the fringes of the Frontier. Master an ever-growing roster of diverse Legends, deep tactical squad play, and bold new innovations in the next evolution of Battle Royale.",
        image:
          "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg?t=1628602000",
        price: "Free To Play",
        rating: JSON.stringify({
          comment: "Very Positive",
          reviewers: 100000,
        }),
        release_date: new Date("2019/02/04"),
        developer: "Respawn Entertainment",
      });

      // Hunt Showdown
      games.push({
        name: "Hunt: Showdown",
        description:
          "Hunt: Showdown is a competitive first-person PvP bounty hunting game with heavy PvE elements. Set in the darkest corners of the world, it packs the thrill of survival games into a match-based format.",
        image:
          "https://cdn.akamai.steamstatic.com/steam/apps/594650/header.jpg?t=1628602000",
        price: "$39.99",
        rating: JSON.stringify({
          comment: "Very Positive",
          reviewers: 100000,
        }),
        release_date: new Date("2019/08/27"),
        developer: "Crytek",
      });

      // Inserts seed entries
      return knex("games").insert(games);
    });
};
