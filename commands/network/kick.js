const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ".";
const bot = new commando.Client({
  commandPrefix: prefix
});

class kickCommand extends commando.Command{
  constructor(client) 
  {
    super(client, {
      name: 'kick', 
      group: 'network',
      memberName: 'kick',
      description: "Kick a user"
    });
  }
  async run (message, args)
  {
        var warnargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(warnargs[0]));
        var warnreason = warnargs.join(" ").slice(26);
        if (!warnUser) return message.channel.send("Usage: .kick <**user**> <**reason**>")
    
        var supportteamerole = message.guild.roles.find(`name`, "Staff");
        
        if (!message.member.roles.has(supportteamerole.id)) return message.channel.send("Insufficient permission. You do not have permission to ban others");

        if (warnUser.roles.has(supportteamerole.id)) return message.channel.send("Insufficient permission. You do not have permission to ban support team!");
        
        if (!warnreason) return message.channel.send("Usage: .kick <**user**> <**reason**>")
        
          var warnembed = new Discord.RichEmbed()
          .setColor("#4286f4")
          .setTitle('**MCCon - Kick**')
          .setDescription(`${warnUser}, Kicked by ${message.author}`)
          .addField(`**REASON:**`, warnreason).then(message.guild.member(warnUser.kick(warnreason)));

          let logschannel = message.guild.channels.find(`name`, "logs");
          if(!logschannel) return message.channel.send("Couldn't find the logs channel");

          logschannel.send(warnembed);

        warnUser.sendMessage(warnUser + " Hey you have been kicked from the MCCon Network for the reason of " + '[' + warnreason + ']').catch()

        message.delete();
  }
}

module.exports = kickCommand
