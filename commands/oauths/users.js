module.exports = {
    config: {
        name: 'users',
        description: 'desc',
        usage: `!users`,
    },
    async run (bot,message,args) {
        message.channel.send("> <:user:1061695086041239672> Il y'a `10,864` utilisateurs dans ma db.");
    }
}
