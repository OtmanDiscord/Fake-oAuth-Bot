module.exports = {
    config: {
        name: 'refresh',
        description: 'desc',
        usage: `!refresh`,
    },
    async run (bot,message,args) {
        message.channel.send("> 👥 Entrain de rafraîchir `10,864` utilisateurs..");
    }
}
