// Discord.js bot
const Discord = require('discord.js');
var prefix = "$"
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Nevira Server', {type: 'WATCHING'});
});

client.on('message', async message => {
  let args = message.content.slice(3);
  if(message.content.startsWith(prefix + 'bc')) {
    if(!message.guild.members.get(message.author.id).hasPermission('ADMINISTRATOR')) return message.channel.send('Required Administrator Permission')
       message.guild.members.forEach(m => {
      
      m.send(args.replace('[user]', m).replace('[server]', m.guild.name).replace('[sender]', message.author.username))
    })
  }
})

client.login(process.env.TOKEN);
