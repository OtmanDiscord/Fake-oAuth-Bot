module.exports = {
    config: {
        name: 'users',
        description: 'desc',
        usage: `!users`,
    },
    async run (bot,message,args) {
        message.channel.send("> 💯 Il y'a `10,864` utilisateurs dans ma db. \n Tapez `!joinall` pour lancer un join-all, ou `!refresh` pour rafraîchir la db !");
    }
}
