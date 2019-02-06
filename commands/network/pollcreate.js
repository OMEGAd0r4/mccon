const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = ".";
const bot = new commando.Client({
  commandPrefix: prefix
});

class pollcreateCommand extends commando.Command {
    constructor(client) 
    {
      super(client, {
        name: 'pollcreate', 
        group: 'network',
        memberName: 'pollcreate',
        description: "Create a poll"
      });
    }

    async run(message, args)
    {
        var pollargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        var pollmsg = pollargs.join(" ").slice(11);

        var staffrole = message.guild.roles.find(`name`, "Staff");

        if (args.length === 0)
        return message.reply('**Invalid Format:** `!Poll <Question>`')
      
        const embed = new Discord.RichEmbed()
        .setTitle("**MCCon - Poll**")
        .setColor("#42f4e8")
        .setDescription(`${pollmsg}`)

        var pollchannel = message.guild.channels.find(`name`, "changelogs");
      
        pollchannel.send(pollmsg)
        .then(msg => {
            msg.react('✅');
            msg.react('❌');
        })
        .catch(() => console.error('Emoji failed to react.'));

    }
}

module.exports = pollcreateCommand;
