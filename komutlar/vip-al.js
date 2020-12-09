const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {//splashen
  let kişi = message.mentions.members.first()
  let rol = ayarlar.vipROL
  if(!message.member.hasPermission('ADMINISTRATOR')) return
   if(!kişi) return message.channel.send('Vip alacağın kişiyi etiketlemelisin.')
  var role = message.guild.roles.cache.find(role => role.id === rol); 
  kişi.roles.remove(role);
  message.channel.send(`**${kişi.user.tag}** adlı kullanıcının vip rolü alındı.`).then(m =>m.delete({timeout : '4000'}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vip-al'],
  permLevel: 0
};

exports.help = {
  name: 'vipal'
};
//splashen