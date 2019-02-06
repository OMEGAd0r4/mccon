const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = ".";
const bot = new commando.Client({
  commandPrefix: prefix
});

class sneamsgcreateCommand extends commando.Command {
    constructor(client) 
    {
      super(client, {
        name: 'sneamsgcreate', 
        group: 'network',
        memberName: 'sneamsgcreate',
        description: "Broadcasts a message"
      });
    }

    async run(message, args)
    {
        await message.delete();

        var msgargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        var msgmsg = msgargs.join(" ").slice(14);
        var staffrole = message.guild.roles.find(`name`, "Staff");

        if (!msgmsg) return message.channel.send("Usage: .sneamsgcreate <**message**>");

        if (!message.member.roles.has(staffrole.id)) return message.channel.send("Insufficient permission");

        var sendchannel = message.guild.channels.find(`name`, "sneak-peaks");

        sendchannel.send(msgmsg);
    }
}

module.exports = sneamsgcreateCommand;
