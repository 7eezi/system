const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const ytScraper = require("yt-scraper"); // npm i yt-scraper
const developers = "552322709292580875";
const prefix = "$";




bot.on('ready', () =>{
    console.log(`
    
    - This Bot is Online.
    - Logged in **${bot.user.tag}**.
    - All Codes Working.

    `)
})






bot.on("message", message => { // send token
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        if(!message.guild.members.get(bot.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('> **أحتاج تفعل المانج ماسج لرتبتي عشان احذف التوكنات**')
        message.delete();
        message.reply(`أرسلت توكنك بالغلط؟ , لاتخاف حذفناه`);
        return;
    }
                              if(message.channel.type === "dm"){
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        message.delete();
        message.reply(`أرسلت توكنك بالغلط؟ , لاتخاف حذفناه`);
        return;
    }
}
});



bot.on('message', message => { // State
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'play')) {
    bot.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(prefix + 'wat')) {
  bot.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(prefix + 'lis')) {
  bot.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(prefix + 'st')) {
    bot.user.setGame(argresult, "https://www.twitch.tv/7eezi");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(prefix + 'nm')) {
  bot.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'av')) {
  bot.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


var config = { // log
  events: [
    {type: "CHANNEL_CREATE", logType: "CHANNEL_CREATE", limit: 4 , delay: 5000},
    {type: "CHANNEL_DELETE", logType: "CHANNEL_DELETE", limit: 4, delay: 5000},
    {type: "GUILD_MEMBER_REMOVE", logType: "MEMBER_KICK", limit: 4, delay: 5000},
    {type: "GUILD_BAN_ADD", logType: "MEMBER_BAN_ADD", limit: 4, delay: 5000},
    {type: "GUILD_ROLE_CREATE", logType: "ROLE_CREATE", limit: 5, delay: 5000},
    {type: "GUILD_ROLE_DELETE", logType: "ROLE_DELETE", limit: 4, delay: 5000},
  ]
}
bot.on("error", (e) => console.error(e));
bot.on("raw", (packet)=> {
  let {t, d} = packet, type = t, {guild_id} = data = d || {};
  if (type === "READY") {
    bot.startedTimestamp = new Date().getTime();
    bot.captures = [];
  }
  let event = config.events.find(anEvent => anEvent.type === type);
  if (!event) return;
  let guild = bot.guilds.get(guild_id);
  if (!guild) return;
  guild.fetchAuditLogs({limit : 1, type: event.logType})
    .then(eventAudit => {
      let eventLog = eventAudit.entries.first();
      if (!eventLog) return;
      let executor = eventLog.executor;
      guild.fetchAuditLogs({type: event.logType, user: executor})
        .then((userAudit, index) => {
          let uses = 0;
          userAudit.entries.map(entry => {
            if (entry.createdTimestamp > bot.startedTimestamp && !bot.captures.includes(index)) uses += 1;
          });
          setTimeout(() => {
            bot.captures[index] = index
          }, event.delay || 2000)
          if (uses >= event.limit) {
            bot.emit("reachLimit", {
              user: userAudit.entries.first().executor,
              member: guild.members.get(executor.id),
              guild: guild,
              type: event.type,
            })
          }
        }).catch(console.error)
    }).catch(console.error)
});
bot.on("reachLimit", (limit)=> {
  let log = limit.guild.channels.find( channel => channel.name === "log");
  log.send(limit.user.username+"> \** Your server will hacking !.** ");
  limit.guild.owner.send(limit.user.username+"> \** Your server will hacking !.** ")
  limit.member.roles.map(role => {
    limit.member.removeRole(role.id)
    .catch(log.send)
  });
});


bot.on('guildMemberAdd', member => { // Welcome
  message.channel.send(`
  > Welcome To Friends Server :
  > User : ${user.tag}
  > Join On : ${daysJoined.toFixed(0)}

  `
  )
})


bot.on('message', msg => {
    if(msg.content === '$help')
    msg.channel.send('> **__ Check Your DM :white_check_mark:.__**')
  });
 
 
  bot.on("message", message => {
    if (message.content === "$help") {
     const embed = new Discord.RichEmbed()
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`** Helper Bot

       $help admin    | للأوامر الإدارية
       $help general  | للأوامر العامة
       ** `)
   message.author.sendEmbed(embed)
   
   }
   });


   bot.on("message", message => {
    if (message.content === "$help admin") {
     const embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .setFooter('All Copyrights © Saved on Helper Bot ')
         .setDescription(`** Admin Commands | الأوامر الإدارية

         $server | لمعرفة معلومات السيرفر
         $kick   | الطرد
         $ban    | الباند
         $unban  | فك الباند بالآي دي
         $cColor | لإنشاء 137 لون
         $nick   | تغير النك نيم
         $clear  | لمسح الشات
         **`)
     message.channel.send({embed});
   
    }
   });


   bot.on("message", message => {
    if (message.content === "$help general") {
     const embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .setFooter('All Copyrights © Saved on Helper Bot ')
         .setDescription(`** Members Commands | أوامر الأعضاء

         $ping     | لمعرفة سرعة البنق عندك
         $yt       | لمعرفة معلومات قنوات اليوتيوب
         $support  | سيرفر الدعم حق البوت
         $bot      | لأخذ رابط اي بوت بمنشن
         $level    | لمعرفة مستواك
         $killEx   | يعطيك 10 اكس بي
         **`)
     message.channel.send({embed});
   
    }
   });


   bot.on('messageReactionAdd', (reaction) => { // Reaction new
    const embed = new Discord.RichEmbed()
    .setTitle(`New Reaction`)
    .setDescription(`**Reaction Message:-** ${reaction.message.content} \n **Reaction Emoji:-** ${reaction.emoji} \n **Reaction Message ID:-** ${reaction.message.id} \n **Reaction Message Channel:-** ${reaction.message.channel.name} \n **Reactions Count:-** ${reaction.count}`)
   bot.channels.get('CHANNEL ID').send({embed : embed}).catch(e => console.log(e))
  })

  
  bot.on('messageReactionRemove', (reaction) => { // Reaction Removed
    const embed = new Discord.RichEmbed()
    .setTitle(`Reaction Removed`)
    .setDescription(`**Reaction Message:-** ${reaction.message.content} \n **Reaction Emoji:-** ${reaction.emoji} \n **Reaction Message ID:-** ${reaction.message.id} \n **Reaction Message Channel:-** ${reaction.message.channel.name} \n **Reactions Count:-** ${reaction.count}`)
    bot.channels.get('CHANNEL ID').send({embed : embed}).catch(e => console.log(e))
  })

   
   bot.on('message', function(msg) { // server
  if(msg.content.startsWith (prefix  + 'server')) {
   let embed = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setThumbnail(msg.guild.iconURL)
   .setTitle(`Showing Details Of  **${msg.guild.name}**`)
   .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
   .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
   .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
   .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
   .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
   .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
   .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
   .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
   .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
   msg.channel.send({embed:embed});
  }
  });


bot.on('message', message => {
	if (message.content === '$support') {
		message.channel.send('> https://discord.gg/ez2UqCB .');
	}
});

bot.on('message', message =>{ // unban
    let command = message.content.split(" ")[0];
    if (command == prefix + "unban") {
    if(!message.member.hasPermission('BAN_MEMBERS')) return;
    let args = message.content.split(" ").slice(1).join(" ");
    if(args == 'all') {message.guild.fetchBans().then(zg => {
    zg.forEach(NoNo => {message.guild.unban(NoNo);})});
    return message.channel.send('> **✅ Unbanned all members .**')}
    if(!args) return message.channel.send('> **Please Type the member ID / all.**');
    message.guild.unban(args).then(m =>{message.channel.send(`> **✅ Unbanned ${m.username}.**`);
    }).catch(stry =>{message.channel.send(`> **🙄 - I can't find \`${args}\` in the ban list.**`)});
    }});
     

    bot.on("message", message => { // bot invite
      if(message.content.startsWith(prefix + "bot")) {
        var mbot = message.mentions.members.first()
        message.channel.send(`https://discordapp.com/api/oauth2/authorize?client_id=${mbot.id}&permissions=0&scope=bot`)
      }
    });
   
bot.on('message', message => { // Youtube
    if (message.content.startsWith(prefix + 'yt')) {
      let args = message.content.split(" ").slice(1).join(" ");
      if(!args) return message.channel.send(`> :rolling_eyes: **please type the channel link.**`)
      if(!args.includes("https://www.youtube.com/channel/")) return message.channel.send('> **I Can\'t find This Channel 💢.**')
    ytScraper.channelInfo(`${args}`).then(yt => {
        const embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle(`**\`${yt.name}\`**'s channel Info`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/595057510436831252/youtube.png`)
        .addField(`> **Subscribers.**`, `${yt.subscribers}`,true)
        .addField(`> **Views.**`, `${yt.views}`,true)
        .addField(`> **Created In.**`, `${yt.joined}`,true)
        .addField(`> **URL.**`, `[__Click Here__](${yt.url})`,true)
        .addField(`> **Description.**`, `\`\`\`${yt.description}\`\`\``,true)
        .setFooter(`> Requested by. ${message.author.tag}`,message.author.avatarURL)
        .setTimestamp()
  message.channel.send({embed});
 
    })
}
});


bot.on('message', message => {  
    if (message.author.bot) return; 
    if (message.content.startsWith(prefix + 'clear')) { 
    if(!message.channel.guild) return message.reply(`> ** This Command For Servers Only**`); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** You don't have Premissions!**`);
     if(!message.guild.member(bot.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`> **I don't have Permission!**`);
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply(`> ** The number can't be more than **100** .**`).then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)).then(msgs => {
    message.channel.send(`> ** Done , Deleted \`${msgs.size}\` messages.**`).then(messages => messages.delete(5000));
    })
  }
});


bot.on('message' , message => { // ping
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + "ping")) {
   message.channel.send('Pong...').then((msg) => {
        msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(bot.ping)} ms.\`\`\``);
   })

    }
});




   bot.on('message', message => { // kick
    if (message.content.startsWith(prefix + 'kick')) {
      const member = message.mentions.members.first()
  
      if (!member) {
        return message.channel.send(
          `> Who are you trying to kick? You must mention a user.`
        )
      }
  
      if (!member.kickable) {
        return message.channel.send(`> I can't kick this user. Sorry!`)
      }
  
      return member
        .kick()
        .then(() => message.channel.send(`> ${member.user.tag} was kicked.`))
        .catch(error => message.channel.send(`> Sorry, an error occured.`))
    }
  })


  let XP = JSON.parse(fs.readFileSync('./XP.json', 'utf8'));

bot.on("message", msg => {	
	console.log(0)
	if(!msg.content.startsWith(prefix)) return;
	
	let userData = XP[msg.author.id];
	if (!userData) userData = {XP: 0, level: 0};
	
	let userXP = XP[msg.author.id] ? XP[msg.author.id].XP : 0;
	let curLevel = Math.floor(0.1 * Math.sqrt(userXP));
	if (curLevel > userData.level) {
		userData.level = curLevel;
        msg.reply(`
        - Level up to **${curLevel}**!
        `);
	}
	
	console.log("level")
	if (msg.content.startsWith(prefix + "level")) {
        msg.reply(`
        - ur Level ${userData.level} , with ${userData.XP} XP Right Now.
        `);
	}
	
	if (!XP[msg.author.id]) XP[msg.author.id] = {XP: 0, level: 0}
	
	
	
	console.log("Example")
	if (msg.content.startsWith(prefix + "killEx")) {
		userData.XP += 10
        msg.channel.sendMessage(`
        - ${msg.author} has killed an Example!
        `)
	}
	
	console.log(XP)
	fs.writeFile('./XP.json', JSON.stringify(XP), console.error);
	
});



  bot.on('message',message =>{ // nick
    let command = message.content.split(" ")[0];
    if (command == prefix + "nick") {
    if(!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`> You Don't has premisson.`)
    if(!message.guild.member(bot.user).hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`> **I Don\'t have \`MANAGE_NICKNAMES\` Permission.**`)
    var user = message.guild.members.get(message.content.split(" ")[1]) || message.mentions.members.first();
    let MrNono = message.content.split(" ").slice(2).join(" ");
    if(!user) return message.channel.send(`> **:rolling_eyes: I can't find this member.**`);
    if(!MrNono) {
    user.setNickname("",`By : ${message.author.tag}`)
    .catch(MrNoNo =>{});
    return message.channel.send(`> **✅ ${user}'s nick has been reset.**`);
    }user.setNickname(MrNono,`By : ${message.author.tag}`)
    .catch(NoNo =>{});
    message.channel.send(`> ✅ Done changed ${user} nickname to **\`${MrNono}\`**.`);}});


bot.on('message', message => { // ban
  if(message.content.split(' ')[0] == `${prefix}ban`){
  if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('> **You don\'t have permission.**');
      if(!message.guild.member(bot.user).hasPermission('BAN_MEMBERS')) return message.channel.send('> **I don\'t have permission.**');
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if(!user) return message.channel.send(`> **Usage: ${prefix}ban @mention reason.**`);
      if(!reason) reason = '> **No reason provided.**';
      if(user.user.id === message.author.id) return message.channel.send('> **You can\'t ban yourself!**');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`> You can't ban **${user.user.tag}** because his role highest than your role!`);
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(bot.user).highestRole.position) return message.channel.send(`> I can't ban **${user.user.tag}** because his role highest than my role!`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD') || user.user.id == message.guild.owner.id) return message.channel.send(`> You can't ban **${user.user.tag}** because he have Administration permissions!`);
      if(!message.guild.member(user.user).bannable) return message.channel.send(`> I can't ban **${user.user.tag}**.`);
      message.guild.member(user).ban(reason, user);
      message.channel.send(`> **Done :+1:, I Banned **${user.user.username}** from the server!\nReason: **\`\`${reason}\`\``);
    }
});


bot.on('message', message => { // creat color
      if(message.content === prefix + 'cColor') {
                           if(!message.channel.guild) return message.channel.send('> **This Command only For Servers !.**'); 
              
           if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('> **You Dont Have** `ADMINISTRATOR` **premission.**').then(msg => msg.delete(6000))
        message.guild.createRole({
                    name: "1",
                      color: "#FFB6C1",
                      permissions: []
       })
             message.guild.createRole({
                    name: "2",
                      color: "#FFC0CB",
                      permissions: []
       })
                  message.guild.createRole({
                    name: "3",
                      color: "#FF69B4",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "4",
                      color: "#FF1493",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "5",
                      color: "#DB7093",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "6",
                      color: "#C71585",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "7",
                      color: "#E6E6FA",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "8",
                      color: "#D8BFD8",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "8",
                      color: "#DDA0DD",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "9",
                      color: "#DA70D6",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "10",
                      color: "#EE82EE",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "11",
                      color: "#FF00FF",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "12",
                      color: "#BA55D3",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "13",
                      color: "#9932CC",
                      permissions: []
       })
                            message.guild.createRole({
                    name: "14",
                      color: "#9400D3",
                      permissions: []
       })
                            message.guild.createRole({
                    name: "15",
                      color: "#8A2BE2",
                      permissions: []
       })
                                 message.guild.createRole({
                    name: "16",
                      color: "#8B008B",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "17",
                      color: "#800080",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "18",
                      color: "#9370DB",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "19",
                      color: "#7B68EE",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "20",
                      color: "#6A5ACD",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "21",
                      color: "#483D8B",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "22",
                      color: "#663399",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "23",
                      color: "#4B0082",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "24",
                      color: "#FFA07A",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "25",
                      color: "#FA8072",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "26",
                      color: "#E9967A",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "27",
                      color: "#F08080",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "28",
                      color: "#CD5C5C",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "29",
                      color: "#DC143C",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "30",
                      color: "	#FF0000",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "31",
                      color: "#B22222",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "32",
                      color: "#8B0000",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "33",
                      color: "#FFA500",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "34",
                      color: "#FF8C00",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "35",
                      color: "#FF7F50",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "36",
                      color: "#FF6347",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "37",
                      color: "#FF4500",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "38",
                      color: "#FFD700",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "39",
                      color: "#FFFFE0",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "40",
                      color: "#FFFACD",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "41",
                      color: "#FAFAD2",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "42",
                      color: "	#FFEFD5",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "43",
                      color: "#FFE4B5",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "44",
                      color: "#FFDAB9",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "45",
                      color: "#EEE8AA",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "46",
                      color: "#F0E68C",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "47",
                      color: "#BDB76B",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "48",
                      color: "#ADFF2F",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "49",
                      color: "#7FFF00",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "50",
                      color: "#7CFC00",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "51",
                      color: "#00FF00",
                      permissions: []
       })  
       
                                           message.guild.createRole({
                    name: "52",
                      color: "#32CD32",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "53",
                      color: "#98FB98",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "54",
                      color: "#90EE90",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "55",
                      color: "#00FA9A",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "56",
                      color: "#00FF7F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "57",
                      color: "#3CB371",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "58",
                      color: "#2E8B57",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "59",
                      color: "#2E8B57",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "60",
                      color: "#008000",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "61",
                      color: "#006400",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "62",
                      color: "#9ACD32",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "63",
                      color: "#6B8E23",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "64",
                      color: "#556B2F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "65",
                      color: "#66CDAA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "66",
                      color: "#8FBC8F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "67",
                      color: "#20B2AA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "68",
                      color: "#008B8B",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "69",
                      color: "#008080",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "70",
                      color: "#00FFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "71",
                      color: "#E0FFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "72",
                      color: "#AFEEEE",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "73",
                      color: "#7FFFD4",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "74",
                      color: "#40E0D0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "75",
                      color: "#48D1CC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "76",
                      color: "#00CED1",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "77",
                      color: "#5F9EA0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "78",
                      color: "#4682B4",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "79",
                      color: "#B0C4DE",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "80",
                      color: "#ADD8E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "81",
                      color: "#B0E0E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "82",
                      color: "#87CEFA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "83",
                      color: "#87CEEB",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "84",
                      color: "#6495ED",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "85",
                      color: "#00BFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "86",
                      color: "#1E90FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "87",
                      color: "#4169E1",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "88",
                      color: "#0000FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "89",
                      color: "#0000CD",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "90",
                      color: "#00008B",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "91",
                      color: "#000080",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "92",
                      color: "#191970",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "93",
                      color: "#FFF8DC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "94",
                      color: "#FFEBCD",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "95",
                      color: "#FFE4C4",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "96",
                      color: "#FFDEAD",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "97",
                      color: "#F5DEB3",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "98",
                      color: "#DEB887",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "99",
                      color: "#D2B48C",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "100",
                      color: "#BC8F8F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "101",
                      color: "#F4A460",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "102",
                      color: "#DAA520",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "103",
                      color: "#B8860B",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "104",
                      color: "#CD853F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "105",
                      color: "#D2691E",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "106",
                      color: "#808000",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "107",
                      color: "#8B4513",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "108",
                      color: "#A0522D",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "109",
                      color: "#A52A2A",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "110",
                      color: "#800000",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "111",
                      color: "#FFFFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "112",
                      color: "#FFFAFA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "113",
                      color: "#F0FFF0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "114",
                      color: "#F5FFFA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "115",
                      color: "#F0FFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "116",
                      color: "#F0F8FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "117",
                      color: "#F8F8FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "118",
                      color: "#F5F5F5",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "119",
                      color: "#FFF5EE",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "120",
                      color: "#F5F5DC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "121",
                      color: "#FDF5E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "122",
                      color: "#FFFAF0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "123",
                      color: "#FFFFF0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "124",
                      color: "#FAEBD7",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "125",
                      color: "#FAF0E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "126",
                      color: "#FFF0F5",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "127",
                      color: "#FFE4E1",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "128",
                      color: "#DCDCDC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "129",
                      color: "#D3D3D3",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "130",
                      color: "#C0C0C0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "131",
                      color: "#A9A9A9",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "132",
                      color: "#696969",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "133",
                      color: "#808080",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "134",
                      color: "#778899",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "135",
                      color: "#708090",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "136",
                      color: "#2F4F4F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "137",
                      color: "#000000",
                      permissions: []
       })     
  
       
            message.channel.sendMessage({embed: new Discord.RichEmbed()
       .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('> Colors is creating ...')});
      }
    });



bot.login(process.env.TOKEN)
