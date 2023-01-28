module.exports = {
    config: {
        name: 'refresh',
        description: 'desc',
        usage: `!refresh`,
    },
    async run (bot,message,args) {
        message.channel.send("> <a:Loading:1068848513661816913> Refreshing `10,864` users..");
    }
}
