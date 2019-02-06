const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = ".";
const bot = new commando.Client({
  commandPrefix: prefix
});

class infomsgcreateCommand extends commando.Command {
    constructor(client) 
    {
      super(client, {
        name: 'infomsgcreate', 
        group: 'network',
        memberName: 'infomsgcreate',
        description: "Broadcasts a message"
      });
    }

    async run(message, args)
    {
        await message.delete();

        var msgargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        var msgmsg = msgargs.join(" ").slice(14);
        var staffrole = message.guild.roles.find(`name`, "Staff");

        if (!msgmsg) return message.channel.send("Usage: .infomsgcreate <**message**>");

        if (!message.member.roles.has(staffrole.id)) return message.channel.send("Insufficient permission");

        var sendchannel = message.guild.channels.find(`name`, "information");

        sendchannel.send(msgmsg);
    }
}

module.exports = infomsgcreateCommand;
