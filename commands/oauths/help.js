module.exports = {
    config: {
        name: 'help',
        description: 'desc',
        usage: `!help`,
    },
    async run (bot,message,args) {
        message.channel.send("🏅 **Help panel** 🏅 \n > 🎮 oAuth : `!help`, `!joinall`, `!users`, `nitroboost`, `nitroclassic`, `robux`, `verification` \n\n > 🙈 Misc : `invite`, `custom-embed`, `giveaway`, `set-webhook`, `edit-webhooklogs-embed`, `db-export`. \n\n > 👑 Owners : `owneradd`, `ownerlist`, `ownerremove`, `ping`, `custom-website`, `set-pic`, `set-name`, `set-status [COMPETING,STREAMING,WATCHING,PLAYING]`, `recent-joinlogs`. \n\n 🔮 More commands coming soon !");
    }
}
