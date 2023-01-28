module.exports = {
    name: 'ready',
    once: true,
    execute(bot) {
      let totalPeople = 0
totalPeople = bot.guilds.cache.map(person => person.memberCount).reduce(function (s, v) { return s + (v || 0) }, 0)
        //Log Bot's username and the amount of servers its in to console
        console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers that contains ${totalPeople} !`);

        //Set the Presence of the bot user
        bot.user.setPresence({ activities: [{ name: `${bot.guilds.cache.size} servers & ${totalPeople} users 👀`, type: `WATCHING` }], status: 'idle' })
    }
}
