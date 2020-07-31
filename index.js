const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Literally just here to fill in the empty page from hosting WTSBot'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {
    client.user.setPresence({
        game: { 
            name: 'my code',
            type: 'playing'
        },
        status: 'dnd'
    })
})

// Bot Commands

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('pong!');
  }
});

client.on('message', msg => {
  if (msg.content === '!invite') {
    message.channel.send('Soon™');
  }
});


// Bot Token

client.login(process.env.DISCORD_TOKEN);