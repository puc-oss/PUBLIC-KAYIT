const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {//splashen
  let kişi = message.mentions.members.first()
  let rol = ayarlar.vipROL
  if(!message.member.hasPermission('ADMINISTRATOR')) return
   if(!kişi) return message.channel.send('Vip vereceğin kişiyi etiketlemelisin.')
  var role = message.guild.roles.cache.find(role => role.id === rol); 
  kişi.roles.add(role);
  message.channel.send(`**${kişi.user.tag}** adlı kullanıcıya vip rolü verildi.`).then(m =>m.delete({timeout : '4000'}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vip-ver'],
  permLevel: 0
};

exports.help = {
  name: 'vipver'
};
//splashen