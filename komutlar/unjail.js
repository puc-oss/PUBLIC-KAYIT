const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {//splashen
    let jailli = message.mentions.members.first()
     let sebep = args.slice(1).join(' ') || 'Belirtilmemiş'
  let log = ayarlar.jailLOG
  let kayıtlı = ayarlar.kayıtlıROL
  let rol = ayarlar.jailROL
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Yetkin yok')
   if(!jailli) return message.channel.send('Jailden çıkaracağın kişiyi etiketlemelisin.')
  var role = message.guild.roles.cache.find(role => role.id === rol); 
  jailli.roles.remove(rol);
  
  let embed2 = new Discord.MessageEmbed()

  .setDescription(`
  
●▬▬▬▬ <a:alarm3:740278105884590200> **Kullanıcı Jailden Çıkarıldı** <a:alarm3:740278105884590200> ▬▬▬▬▬●

 • Yetkili • ${message.author}
 • Kullanıcı • ${jailli} 

●▬▬▬▬ <a:alarm3:740278105884590200> **Kullanıcı Jailden Çıkarıldı** <a:alarm3:740278105884590200> ▬▬▬▬▬●`)
  .setThumbnail(jailli.user.avatarURL())
   let jailEMBED = new Discord.MessageEmbed()
  .setThumbnail(jailli.user.avatarURL())
  .setDescription(`
●▬▬▬▬▬▬▬ <a:alarm3:740278105884590200> **Jailden Çıkartıldın** <a:alarm3:740278105884590200> ▬▬▬▬▬▬▬▬●

 • Yetkili • ${message.author}
 
 • Jailden çıkarıldın bundan sonra lütfen daha dikkatli davran ve kurallara uy. 

●▬▬▬▬▬▬▬ <a:alarm3:740278105884590200> **Jailden Çıkartıldın** <a:alarm3:740278105884590200> ▬▬▬▬▬▬▬▬●
`)
  
  let embed = new Discord.MessageEmbed()

  .setDescription(`<a:jke:751558669585612830> • __**\`Yetkili\`**__ ${message.author}`)
  .setThumbnail(jailli.user.avatarURL())
  message.channel.send(`**${jailli.user.tag}** adlı kullanıcı başarıyla jailden çıkarıldı.`).then(m => m.delete(4000))
  client.channels.cache.get(ayarlar.jailLOG).send(embed2)
  jailli.send(jailEMBED)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['jail-al'],
  permLevel: 0
};

exports.help = {
  name: 'unjail'
};
//splashen