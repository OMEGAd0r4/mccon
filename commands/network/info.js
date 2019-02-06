const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = ".";
const bot = new commando.Client({
  commandPrefix: prefix
});

class infoCommand extends commando.Command {
    constructor(client) 
    {
      super(client, {
        name: 'info', 
        group: 'network',
        memberName: 'info',
        description: "Shows the information of the server"
      });
    }

    async run(message)
    {
        message.channel.send({embed: new Discord.RichEmbed()
            .setTitle("**MCCon - Information**")
            .setColor("#42f4e8")
            .addField("__Server IP__", "play.mcconnetwork.com")
            .addField("__Server Website__", "mcconnetwork.com")
            .setImage("https://cdn.discordapp.com/attachments/540453310407376896/541181109237710859/MCconBot.png")
            .setFooter("Created by MCcon's Management Team")
            .setTimestamp()})
    }
}

module.exports = infoCommand;
