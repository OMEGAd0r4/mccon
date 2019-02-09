const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = ".";
const bot = new commando.Client({
  commandPrefix: prefix
});

class purgeCommand extends commando.Command {
    constructor(client) 
    {
      super(client, {
        name: 'purge', 
        group: 'network',
        memberName: 'purge',
        description: "Deletes messages"
      });
    }

    async run(message)
    {
        var staffrole = message.guild.roles.find(`name`, "Staff");

        if (!msgmsg) return message.channel.send("Usage: .chanmsgcreate <**message**>");

        if (!message.member.roles.has(staffrole.id)) return message.channel.send("Insufficient permission");  
            
        let messagecount = parseInt(args[1]) || 1;

        var deletedMessages = -1;

        message.channel.fetchMessages({limit: Math.min(messagecount + 1, 100)}).then(messages => {
            messages.forEach(m => {
                if (m.author.id == bot.user.id) {
                    m.delete().catch(console.error);
                    deletedMessages++;
                }
            });
        }).then(() => {
                if (deletedMessages === -1) deletedMessages = 0;
                message.channel.send(`:white_check_mark: Purged \`${deletedMessages}\` messages.`)
                    .then(m => m.delete(2000));
        }).catch(console.error);
    }
}

module.exports = purgeCommand;
