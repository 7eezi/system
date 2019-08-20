const Discord = require("discord.js");
const bot = new Discord.Client();




bot.on('ready', () =>{
  console.log(`Logged in as ${bot.user.tag} !`);
  console.log(`This Bot is Online`);
})



bot.on("message", message => {
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


const developers = "552322709292580875";
const adminprefix = "$";
bot.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'play')) {
    bot.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'wat')) {
  bot.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  bot.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    bot.user.setGame(argresult, "https://www.twitch.tv/7eezi");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'name')) {
  bot.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'avatar')) {
  bot.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});




var config = {
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





bot.on('message', msg => {
    if(msg.content === '$help')
    msg.channel.send('> **__ Check Your DM :white_check_mark:.__**')
  });
 
 
  bot.on("message", message => {
    if (message.content === "$help") {
     const embed = new Discord.RichEmbed()
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`** #Friends Server Commands.

       $help admin    | للأوامر الإدارية
       $help general  | للأوامر العامة
       $help game     | للألعاب
       ** `)
   message.author.sendEmbed(embed)
   
   }
   });




   bot.on("message", message => {
    if (message.content === "$help admin") {
     const embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .setFooter('All Copyrights © Saved on Frineds Server ')
         .setDescription(`** Admin Commands | الأوامر الإدارية

         $server | لمعرفة معلومات السيرفر
         $bc     | لإرسال البرودكاست
         $kick   | الطرد
         $ban    | الباند
         $unban  | فك الباند بالآي دي
         $nick   | تغير النك نيم
         **`)
     message.channel.send({embed});
   
    }
   });


   bot.on("message", message => {
    if (message.content === "$help general") {
     const embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .setFooter('All Copyrights © Saved on Frineds Server ')
         .setDescription(`** Members Commands | أوامر الأعضاء

         $ping | لمعرفة سرعة البنق عندك
         $yt   | لمعرفة معلومات قنوات اليوتيوب

         **`)
     message.channel.send({embed});
   
    }
   });


   
   bot.on("message", message => {
    if (message.content === "$help game") {
     const embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .setFooter('All Copyrights © Saved on Frineds Server ')
         .setDescription(`** Games Commands | أوامر الألعاب

          $marry  | لعبة الزواج
         **`)
     message.channel.send({embed});
   
    }
   });




   
   bot.on('message', async(message) => {
    var prefix ='$';
    if(message.author.julian || message.channel.type == 'dm') return;
    let args = message.content.split(' ');
    if(args[0] == `${prefix}bc`){
        if(!message.member.hasPermission('MANAGE_GUILD')) return;
        if(!args[1]) return message.channel.send(`**Usage:** ${prefix}bc [message]`);
        message.guild.members.map((m) => {
            setTimeout(() => {
                m.send(args.slice(1).join(' ').replace('[user]', m).replace('[server]', message.guild.name)).catch(e => undefined);
            }, 550);
        });
    }
}); 


   bot.on('message', function(msg) {
    var prefix = '$';
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



  

  




bot.on('message', message =>{
    var prefix ='$';
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
     



    const ytScraper = require("yt-scraper"); // npm i yt-scraper
bot.on('message', message => {
  var prefix ='$';
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
  if(message.content.startsWith ("$marry")) {
  if(!message.channel.guild) return message.reply('> ** This command only for servers .**')
  var proposed = message.mentions.members.first()
 
  if(!message.mentions.members.first()) return message.channel.send('>  😏 **لازم تطلب ايد وحدة**').catch(console.error);
  if(message.mentions.users.size > 1) return message.channel.send('>  😳 **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
    if(proposed === bot.user) return message.channel.send(`> ** تبي تتزوجني؟ **`);
          message.channel.send(`**${proposed} 
بدك تقبلي عرض الزواج من ${message.author} 
العرض لمدة 15 ثانية  
اكتبي موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
})

const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
message.channel.send(`  **${message.author} تم رفض عرضك** `);
})
    
}
});




bot.on('message' , message => {
    var prefix = "$";
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + "ping")) {
   message.channel.send('Pong...').then((msg) => {
        msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(bot.ping)} ms.\`\`\``);//حقوق دايموند كودز
   })
    }  
   });


   bot.on('message', message => {
    if (message.content.startsWith('$kick')) {
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




  bot.on('message',message =>{
    var prefix ='$';
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








bot.on('message', message => {
    var prefix = '$'; 
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













bot.login(process.env.TOKEN);
