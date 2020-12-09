const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {//splashen
  let jailli = message.mentions.members.first()
  let sebep = args.slice(1).join(' ') || 'Belirtilmemiş'
  let rol = ayarlar.jailROL
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu işlemi sadece yetkililer yapabilir')
   if(!jailli) return message.channel.send('Jaile atacağın kişiyi etiketlemelisin.')
  if(!sebep) return message.channel.send('Jail sebebini belirtmelisin.')
  
  var role = message.guild.roles.cache.find(role => role.id === rol); 
  jailli.roles.add(rol);
  
  let embed2 = new Discord.MessageEmbed()
  .setThumbnail(jailli.user.avatarURL())
  .setDescription(`
  
●▬▬▬▬▬▬ <a:alarm3:740278105884590200> **Kullanıcı Jaile Atıldı** <a:alarm3:740278105884590200> ▬▬▬▬▬▬▬●

 • Yetkili • ${message.author}
 • Kullanıcı • ${jailli} 
 • Jaile Atılma Sebebi •** ${sebep}**

●▬▬▬▬▬▬ <a:alarm3:740278105884590200> **Kullanıcı Jaile Atıldı** <a:alarm3:740278105884590200> ▬▬▬▬▬▬▬●
`)
 let jailEMBED = new Discord.MessageEmbed()
  .setThumbnail(jailli.user.avatarURL())
  .setDescription(`
●▬▬▬▬▬▬▬▬▬ <a:alarm3:740278105884590200> **Jaile Atıldın** <a:alarm3:740278105884590200> ▬▬▬▬▬▬▬▬▬▬●

 • Yetkili • ${message.author}
 • Jaile Atılma Sebebin •** ${sebep}**
 
 • Jailden çıkarıldığında lütfen daha dikkatli davran ve kurallara uy. 

●▬▬▬▬▬▬▬▬▬ <a:alarm3:740278105884590200> **Jaile Atıldın** <a:alarm3:740278105884590200> ▬▬▬▬▬▬▬▬▬▬●
`)
 jailli.send(jailEMBED)
  message.channel.send(`Kullanıcı başarıyla **${sebep}** sebebiyle jaile atıldı.`).then(m => m.delete({timeout : '4000'}))
  client.channels.cache.get(ayarlar.jailLOG).send(embed2)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['jail-ver'],
  permLevel: 0
};

exports.help = {
  name: 'jail'
};
//splashen