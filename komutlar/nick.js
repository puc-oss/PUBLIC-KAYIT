const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {//splashen
  let yetkili2 = ayarlar.yetkiliROL
  if(!message.member.roles.cache.has(yetkili2)) return message.channel.send('Bu işlemi sadece yetkililer yapabilir') 
let isim = args[1].charAt(0).replace("i", "İ").toUpperCase() + args[1].slice(1).toLowerCase();
  let uye = message.mentions.users.first();
  let yaş = args[2]
  let yetkili = message.author
  let tag = ayarlar.tag || ' '
  if(!uye) return message.channel.send(`İsmi değiştirilecek üyeyi belirtin.`)
  if(!yaş) return message.channel.send(`Üyenin yaşını yazın.`)
  if(!isim) return message.channel.send(`Üyenin ismini yazınız.`)
  if(isim.length > 10) return message.channel.send(`Üyenin ismi 10 harfi geçmemeli.`)
  if(yaş.length > 100) return message.channel.send(`Üyenin yaşı 100'ü geçemez.`)
  message.guild.members.cache.get(uye.id).setNickname(`${tag} ${isim} • ${yaş}`)
  message.channel.send(`\`${uye.username}\`'in ismi başarıyla  \` ${isim} • ${yaş} \` olarak değiştirildi.`)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isim'],
    permLevel: 0
}

exports.help = {
    name: 'nick',
  
}//splashen