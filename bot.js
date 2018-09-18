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
    var setGame = ['نوم','تصبحو على خير'];	
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
          var prefix = '%';
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















client.login(process.env.BOT_TOKEN);
