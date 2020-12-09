const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {//splashen
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let sesli = 0
    for (const [id, voiceChannel] of voiceChannels) sesli += voiceChannel.members.cache.size;
const say = new Discord.MessageEmbed()
  .setDescription(`
●▬▬▬▬▬▬▬▬▬ <a:loading:780482519220748308> **Sunucu İstatistikleri** <a:loading:780482519220748308> ▬▬▬▬▬▬▬▬▬▬●

 • Sunucudaki Üye Sayısı • **${message.guild.memberCount}**
 • Çevrimiçi Üye Sayısı • **${message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}**
 • Sunucudaki Üye Sayısı • **${sesli}**
 • Taglı Üye Sayısı • **${message.guild.members.cache.filter(tag => tag.user.username.includes('BURAYA TAGINIZ GELECEK')).size}** 

●▬▬▬▬▬▬▬▬▬ <a:loading:780482519220748308> **Sunucu İstatistikleri** <a:loading:780482519220748308> ▬▬▬▬▬▬▬▬▬▬●
`)
    message.channel.send(say);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['total'],
    permLevel: 0
};

exports.help = {
    name: 'say'
  //splashen
}