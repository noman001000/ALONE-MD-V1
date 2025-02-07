const { zokou } = require('../framework/zokou');
const Heroku = require('heroku-client');
const s = require("../set");
const axios = require("axios");
const speed = require("performance-now");
const { exec } = require("child_process");
const conf = require(__dirname + "/../set");
zokou({
  nomCom: 'oxy',
  aliases: ['logs', 'running'],
  desc: 'To check runtime',
  categorie: 'system', // Fixed the typo here (Categorie -> categorie)
  reaction: '❤️',
  fromMe: true, // Removed quotes to make it a boolean
}, async (dest, zk, commandeOptions) => {
  const { ms, arg, repondre } = commandeOptions;

  // Get bot's runtime
  const botUptime = process.uptime(); // Get the bot uptime in seconds

  // Send uptime information to the user
  await zk.sendMessage(dest, {
    text: `*${conf.OWNER_NAME} UPTIME IS ${runtime(botUptime)}*`,
    contextInfo: {
      externalAdReply: {
        title: `${conf.BOT} UPTIME`,
        body: `Bot Uptime: ${runtime(botUptime)}`, // Format the uptime before sending
        thumbnailUrl: conf.URL, // Replace with your bot profile photo URL
        sourceUrl: conf.GURL, // Your channel URL
        mediaType: 1,
        showAdAttribution: true, // Verified badge
      },
    },
  });
