module.exports = {
    config: {
        name: 'invite',
        description: 'desc',
        usage: `!invite`,
    },
    async run (bot,message,args) {
        message.channel.send("Mon lien d'invitation est ; https://discord.com/api/oauth2/authorize?client_id=1059449119669760000&permissions=8&scope=bot");
    }
}
