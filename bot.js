const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
}); 



client.on('ready', async() => {
var server = "487425917648502797"; // ايدي السررفر
var channel = "487425917648502801";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**كودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودز **')
    },305);
})








 client.on('ready', function(){	
    var ms = 10000 ;	
    var setGame = ['im is back'];	
    var i = -1;	
    var j = 0;	
    setInterval(function (){	
        if( i == -1 ){	
j = 1;	
       }	
        if( i == (setGame.length)-1 ){	
            j = -1;	
      }	
       i = i+j;	
              client.user.setGame(setGame[i],`https://www.twitch.tv/vv`);
}, ms);	
	
});












 client.on('message', message => {
	    var prefix = "!!";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "CJ Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
  
  var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('سيرفر', message.guild.name)
       .addField('المرسل', message.author.username)
       .addField('الرسالة', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });





client.on('message',function(message) {
	let prefix = "!!";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
  if(message.author.id !== '292042690470739968')
if(!args) return;
message.channel.send(`** ${args}**`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});












client.on('message', message => {
    if (message.content.startsWith("!tg")) {
      
        const translate = require('google-translate-api');
        const Discord = require('discord.js');

    let toTrans = message.content.split(' ').slice(1);
    let language;

    language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;
    if (!language) {
        return message.reply(`Please supply valid agruments.\n**Example** \`%tg text to language\``);
    }
    let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
    translate(finalToTrans, {to: language}).then(res => {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: 'Dragon\'s translator',
                  icon_url: client.user.avatarURL
                },
                fields: [{
                    name: "Translator",
                    value: `**From:** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**To: **${language}\n\`\`\`${res.text}\`\`\``
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "الترجمه"
                }
              }
            });
    }).catch(err => {
        message.channel.send({
            embed: {
                description: '❌ We could not find the supplied language.',
                color: 0xE8642B
              
            }
        });
    });
    }
});









client.on('message', message => {
     if(!message.channel.guild) return;
var prefix = "!!";
                if(message.content.startsWith(prefix + 'bots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});



client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام');
  }
});

client.on('message', msg => {
  if (msg.content === 'كيف الحال') {
    msg.reply('الحمد لله');
  }
});








        client.on('message', message => {
          var prefix = '!!';
          if (message.content.startsWith(prefix + 'العامه')) {
      let embed = new Discord.RichEmbed()
      .addField('%دعوه' ,'يتم ارسال رساله لك في الخاص ويوجد بها رابط البوت')
      .addField('%server' ,'يعطيك معلومات السيرفر')
      .addField('%inv' ,'يعطيك كم شخص جبت للسيرفر')
      .addField('%support' ,'رابط سيرفر الدعم الفني ')
      .addField('%tg' ,'يترجم لك الى 40 لغه تريدها')
      .addField('%bots' ,'يعطيك كم بوت موجود في السيرفر')
      .addField('%bans' ,'يعطيك عدد الاشخاص الي مبندين في السيرفر ')
      .addField('%صوره' ,'يعطيك صورت الشخص الي منشنتو')
      .addField('%min' ,'يعطيك صوره سكن ماين كرافت يجب كتابة اسم الشخص ')
      .addField('%المعلومات' ,'يعطيك معلومات عن البوت ')
      .setColor('RANDOM')
      .setTitle('═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════')
      message.channel.send(embed)
      }
  });


client.on('message', message => {
  if (message.content.startsWith("!!صوره")) {
      var mentionned = message.mentions.users.first();
  var Nizx;
    if(mentionned){
        var Nizx = mentionned;
    } else {
        var Nizx = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setImage(`${Nizx.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});


        client.on('message', message => {
          var prefix = '!!';
          if (message.content.startsWith(prefix + 'العاب')) {
      let embed = new Discord.RichEmbed()
      .addField('%عقاب' ,'لعبة العقاب')
      .addField('%حكم' ,'لعبة الحكم')
      .addField('%مريم' ,'لعبة مريم')
      .addField('%فكك' ,'لعبه فكك يعطيك كلمات لازم تعملها تفكيك')
      .addField('%لو خيروك' ,'لعبة لو خيروك')
      .addField('%خواطر' ,'لعبة خواطر')
      .addField('%اسئلني' ,'لعبه اسئلني يعطيك سؤال يجيب عليك الجواب عليه خلال دقيقه')
      .setColor('RANDOM')
      .setTitle('═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════')
      message.channel.send(embed)
      }
  });


        client.on('message', message => {
          var prefix = '!!';
          if (message.content.startsWith(prefix + 'موسيقى')) {
      let embed = new Discord.RichEmbed()
      .addField('%play' ,'   :headphones:تشغيل الاغنيه باسم او برابط:headphones: ')
      .addField('%stop' ,'    :mute: ايقاف الاغنيه:mute:   ')
      .addField('%skip' ,'     :play_pause: تخطي الاغنيه :play_pause:  ')
      .addField('%pause' ,'    :clock1: ايقاف الاغنيه مؤقت:clock1:  ')
      .addField('%resume' ,'    :musical_note: تكملةالاغنيه:musical_note:  ')
      .addField('%queue' ,'    :pencil: اظهار قائمة التشغيل :pencil:   ')
      .addField('%np' ,'    :page_facing_up: اظهار الاغنية اللي انت مشغلها حاليا:page_facing_up:  ')
      .setColor('RANDOM')
      .setTitle('═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════')
      message.channel.send(embed)
      }
  });





client.on('message',function(message) {
    let prefix = "%";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
    if(message.author.id !== '310129588397277185') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
if(!args) return;
message.channel.send(` ${args}`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});







client.on('message',function(message) {
    let prefix = "%";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "sy")) {
    if(message.author.id !== '292042690470739968') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
if(!args) return;
message.channel.send(` ${args}`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});






































































































client.login(process.env.BOT_TOKEN);
client.login(process.env.BOT_TOKEN2);
