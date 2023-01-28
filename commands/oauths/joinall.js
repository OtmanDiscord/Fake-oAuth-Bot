module.exports = {
    config: {
        name: 'joinall',
        description: 'desc',
        usage: `!joinall`,
    },
    async run (bot,message,args) {
        message.channel.send("> Merci d'entrer le code de sécurité pour continuer le **joinall** : ");
    }
}
