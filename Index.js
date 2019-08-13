// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('!pomoc', {type: 'WATCHING'});
});

client.login(process.env.TOKEN);
