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

    async run(message, args)
    {
        var staffrole = message.guild.roles.find(`name`, "Staff");

        if (!message.member.roles.has(staffrole.id)) return message.channel.send("Insufficient permission");  
      
        var msg1 = args[0];
      
        if (!msg1) return message.channel.send("Usage: .purge <**ammounce**>");
      
      
        message.channel.bulkDelete(args[0]).then(() => {
          message.channel.send("Purged all messages")}).then(message.delete(2000).catch(O_o=>{}));
    }
}

module.exports = purgeCommand;
