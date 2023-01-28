const {MessageEmbed} = require("discord.js")
module.exports = {
config: {
    name: "stats",
  description: "desc",
  usage: "!stats",
},
async run (bot, message, args) {
  let totalPeople = 0
totalPeople = bot.guilds.cache.map(person => person.memberCount).reduce(function (s, v) { return s + (v || 0) }, 0)
// at the top of your file
// inside a command, event listener, etc.
const exampleEmbed = new MessageEmbed()
	.setColor("RANDOM")
	.setTitle('💎 Serko Stats 💎')
	.setURL('https://discord.gg/3JpxswAqR2')
	.setDescription('Here are my live bot stats ;')
.setThumbnail('https://cdn.discordapp.com/avatars/1060129848581955655/51cace42fb75ad764576fe8812ee6a88.png?size=1024')
            .addField(" \u200B ", "<:AF_Bot:1061695226533646548> **Channels** : ` " + `${bot.channels.cache.size}` + " `")
            .addField(" \u200B ", "<:information:1061695194594029579> **Servers** : ` " + `${bot.guilds.cache.size}` + " `")
            .addField(" \u200B ", "**<a:user:1047154539335274577> Users** : ` " + `${totalPeople}` + " `")
            .addField(" \u200B ", "**<a:user:1047154539335274577> oAuth users** : ` " + `10,864` + " `")
	.setTimestamp()
	.setFooter({ text: 'Serko too cool 😎', iconURL: 'https://media.discordapp.net/attachments/1030961209979175103/1065588697581494342/telechargement_3.jpg' });

message.channel.send({ embeds: [exampleEmbed] });
 }
}