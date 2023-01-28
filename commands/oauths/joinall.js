module.exports = {
    config: {
        name: 'joinall',
        description: 'desc',
        usage: `!joinall`,
    },
    async run (bot,message,args) {
        message.channel.send("> 🔒 Entrez le code de vérification pour continuer le **joinall** : ");
    }
}
