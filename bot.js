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
    var setGame = ['يسعد مساكم','يسعد صباحكم'];	
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
              client.user.setGame(setGame[i],`https://www.twitch.tv/jokar_999`);
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
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`لا يوجد لديك صلاحيه حتى تستخدم هذا الامر`)
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









var fkk =[
        {f:"بسم الله الرحمن الرحيم",k:"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م"},
        {f:"باص",k:"ب ا ص"},
        {f:"عربة",k:"ع ر ب ة"},
        {f:"سيارة",k:"س ي ا ر ة"},
        {f:"سيرفرنا احلى سيرفر",k:"س ي ر ف ر ن ا ا ح ل ى س ي ر ف ر"},
        {f:"العنود",k:"ا ل ع ن و د"},
        {f:"المستتكعكبتيه",k:"ا ل م س ت ت ك ع ك ب ت ي ه"},
        {f:"دحوم",k:"د ح و م"},
        {f:"اونرنا احلى اونر",k:"ا و ن ر ن ا ا ح ل ى ا و ن ر"},
        {f:"الحياة حلوة",k:"ا ل ح ي ا ة ح ل و ة"},
        {f:"كازخستان",k:"ك ا ز خ س ت ا ن"},
        {f:"لحم الحمام حلال ولحم الحمار حرام ",k:"ل ح م ا ل ح م ا م ح ل ا ل و ل ح م ا ل ح م ا ر ح ر ا م"},
        {f:"استونيا",k:"ا س ت و ن ي ا"},
        {f:"وجغمه",k:"ل ق م ة و ج غ م ه"},
        {f:"زنديق",k:"ز ن د ي ق"},
        {f:"استراليا",k:"ا س ت ر ا ل ي ا"},
        {f:"سوريا ",k:"س و ر ي ا"},
        {f:"الاردن",k:"ا ل ا ر د ن"},
        {f:"طماطم ",k:"ط م ا ط م"},
        {f:"سارة",k:"س ا ر ة"},
        {f:"دراجون",k:"د ر ا ج و ن"},
        {f:"سيرفر",k:"س ي ر ف ر"},
        {n:"الجبل",m:"ا ل ج ب ل"},
        {n:"هضبة",m:"ه ض ب ة"},
        {n:"خواطر",m:"خ و ا ط ر"},
        {n:"ارحبو",m:"ا ر ح ب و"},
        {n:"اطنخ سيرفر",m:"ا ط ن خ س ي ف ر"},
        {n:"احبك",m:"ا ح ب ك"},
        {n:"سبرايز",m:"س ب ر ا ي ز"},
        {n:"ولي على أمتك",m:"و ل ي ع ل ى أ م ت ك"},
        {n:"الو محد",m:"ا ل و م ح م د"},
        {n:"جوكر",m:"ج و ك ر"},
        {n:"كريزي",m:"ك ر ي ز ي"},
	{n:"فلسطين",m:"ف ل س ط ي ن"},
	{n:"مصر",m:"م ص ر"},
	{n:"بحبك",m:"ب ح ب ك"},
	
	
   ];

const Discord = require('discord.js');
const client = new Discord.Client();
const UserBlocked = new Set(); 
const pretty = require('pretty-ms')
,ti={};
   client.on("message", async message => {
	   var prefix = "%";
    if(message.content == prefix+"فكك"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
        UserBlocked.add(message.guild.id)
        var ask = fkk[Math.floor(Math.random() * fkk.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('فكك كلمه')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription(ask.f);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(200000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:100000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "فكك") return
           if(result.content == ask.k){

             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: اجابة صحيحة')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** الإجابة صحيحة`);
                message.channel.sendEmbed(embeds);                return;
           } else {

                               var embedx = new Discord.RichEmbed()
             .setTitle(':x:خطاء')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** الإجابة خاطئة`);

                message.channel.sendEmbed(embedx);
           }
     });
  }
});
















client.login(process.env.BOT_TOKEN);
