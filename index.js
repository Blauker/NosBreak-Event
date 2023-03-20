const { Client, Intents, MessageEmbed, GuildScheduledEvent, GuildChannel } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json');
var cron = require('cron');

const NosBreakSV = "1023616596226351114";

const TestCH = "1024650144542621796";


const EventCH = "959549490547814450_____NONONONONO";


client.on('ready', () => {
    console.log('The client is ready!');
    client.user.setActivity('NosBreak', { type: "PLAYING" });

    let guild = client.guilds.cache.get(NosBreakSV);
    let channel = guild.channels.cache.get(TestCH);

    const wbID = "<@&1081403465017872404>";
    const penguinID = "<@&1081403745084125205>";
    const icID = "<@&1081403781771694170>";
    const aotID = "<@&1081403813300273172>";
    const caliID = "<@&1081403866379206697> ";
    const brID = "<@&1081403917079945237>";
    const rbbID = "<@&1081403942681981050>";
    const lotteryID = "<@&1081403973153595463>";


    const wbText = new MessageEmbed()
        .setColor(0xff2600) 
        .setTitle("World Boss will start in 5 minutes")
        .setImage('https://i.postimg.cc/kg2mT2Hs/wb.png');
    const penguinText = new MessageEmbed()
        .setColor(0x0586ff) 
        .setTitle("Penguin Trap will start in 5 minutes")
        .setImage('https://i.postimg.cc/sXrCfwgH/pt.png');
    const icText = new MessageEmbed()
        .setColor(0xf0a243) 
        .setTitle("Instant Battle will start in 5 minutes")
        .setImage('https://i.postimg.cc/G3jdtwYF/ic.png');
    const aotText = new MessageEmbed()
        .setColor(0x1e1c52) 
        .setTitle("Arena of Talents Trap will start in 5 minutes")
        .setImage('https://i.postimg.cc/HnTmzBG8/aot.png');
    const caliText = new MessageEmbed()
        .setColor(0xbd690f) 
        .setTitle("Caligor will start in 5 minutes")
        .setImage('https://i.postimg.cc/YSgwwJMm/cali.png');
    const brText = new MessageEmbed()
        .setColor(0x6a5d75) 
        .setTitle("Battle Royale will start in 5 minutes")
        .setImage('https://i.postimg.cc/Vv48Vn1G/battle.png');
    const rbbText = new MessageEmbed()
        .setColor(0x340061) 
        .setTitle("Rainbow Battle will start in 5 minutes")
        .setImage('https://i.postimg.cc/Yqn7N6dj/rbb.png');
    const lotteryText = new MessageEmbed()
        .setColor(0xff85d8) 
        .setTitle("Lottery will start in 5 minutes")
        .setImage('https://i.postimg.cc/dVgKpqPY/lottery.png');

    
    // var aaa = new cron.CronJob('30 40 23 * * *', function () {
    //     channel.send({ embeds: [wbText] });
    //     channel.send({ embeds: [penguinText] });
    //     channel.send({ embeds: [icText] });
    //     channel.send({ embeds: [aotText] });
    //     channel.send({ embeds: [caliText] });
    //     channel.send({ embeds: [brText] });
    //     channel.send({ embeds: [rbbText] });
    //     channel.send({ embeds: [lotteryText] });
    // }, null, true, 'Europe/Madrid'); aaa.start();

    // WORLD BOSS SCHEDULE
    var wb1 = new cron.CronJob('00 55 10 * * *', function () {
        channel.send(wbID);
        channel.send({ embeds: [wbText] });
    }, null, true, 'Europe/Madrid'); wb1.start();
    var wb2 = new cron.CronJob('0 55 16 * * *', function () {
        channel.send(wbID);
        channel.send({ embeds: [wbText] });
    }, null, true, 'Europe/Madrid'); wb2.start();
    var wb3 = new cron.CronJob('0 55 22 * * *', function () {
        channel.send(wbID);
        channel.send({ embeds: [wbText] });
    }, null, true, 'Europe/Madrid'); wb3.start();

    // PENGUIN TRAP SCHEDULE
    var pt1 = new cron.CronJob('00 55 12 * * *', function () {
        channel.send(penguinID);
        channel.send({ embeds: [penguinText] });
    }, null, true, 'Europe/Madrid'); pt1.start();
    var pt2 = new cron.CronJob('00 55 18 * * *', function () {
        channel.send(penguinID);
        channel.send({ embeds: [penguinText] });
    }, null, true, 'Europe/Madrid'); pt2.start();
    var pt3 = new cron.CronJob('00 55 20 * * *', function () {
        channel.send(penguinID);
        channel.send({ embeds: [penguinText] });
    }, null, true, 'Europe/Madrid'); pt3.start();

    // INSTANT BATTLE SCHEDULE
    var ic01 = new cron.CronJob('00 50 01 * * *', function () {
        channel.send(icID);
        channel.send({ embeds: [icText] });
    }, null, true, 'Europe/Madrid'); ic01.start();
    var ic02 = new cron.CronJob('00 50 03 * * *', function () {
        channel.send(icID);
        channel.send({ embeds: [icText] });
    }, null, true, 'Europe/Madrid'); ic02.start();
    var ic03 = new cron.CronJob('00 50 05 * * *', function () {
        channel.send(icID);
        channel.send({ embeds: [icText] });
    }, null, true, 'Europe/Madrid'); ic03.start();
    var ic04 = new cron.CronJob('00 50 07 * * *', function () {
        channel.send(icID);
        channel.send({ embeds: [icText] });
    }, null, true, 'Europe/Madrid'); ic04.start();
    var ic05 = new cron.CronJob('00 50 09 * * *', function () {
        channel.send(icID);
        channel.send({ embeds: [icText] });
    }, null, true, 'Europe/Madrid'); ic05.start();
    var ic06 = new cron.CronJob('00 50 11 * * *', function () {
        channel.send(icID);
        channel.send({ embeds: [icText] });
    }, null, true, 'Europe/Madrid'); ic06.start();
    var ic07 = new cron.CronJob('00 50 13 * * *', function () {
        channel.send(icID);
        channel.send({ embeds: [icText] });
    }, null, true, 'Europe/Madrid'); ic07.start();
    var ic08 = new cron.CronJob('00 50 15 * * *', function () {
        channel.send(icID);
        channel.send({ embeds: [icText] });
    }, null, true, 'Europe/Madrid'); ic08.start();
    var ic09 = new cron.CronJob('00 50 17 * * *', function () {
        channel.send(icID);
        channel.send({ embeds: [icText] });
    }, null, true, 'Europe/Madrid'); ic09.start();
    var ic10 = new cron.CronJob('00 50 19 * * *', function () {
        channel.send(icID);
        channel.send({ embeds: [icText] });
    }, null, true, 'Europe/Madrid'); ic10.start();
    var ic11 = new cron.CronJob('00 50 21 * * *', function () {
        channel.send(icID);
        channel.send({ embeds: [icText] });
    }, null, true, 'Europe/Madrid'); ic11.start();
    var ic12 = new cron.CronJob('00 50 23 * * *', function () {
        channel.send(icID);
        channel.send({ embeds: [icText] });
    }, null, true, 'Europe/Madrid'); ic12.start();

    // ARENA OF TALENT SCHEDULE
    var aot = new cron.CronJob('00 55 14 * * *', function () {
        channel.send(aotID);
        channel.send({ embeds: [aotText] });
    }, null, true, 'Europe/Madrid'); aot.start();

    // CALIGOR SCHEDULE
    var cali1 = new cron.CronJob('00 55 02 * * *', function () {
        channel.send(caliID);
        channel.send({ embeds: [caliText] });
    }, null, true, 'Europe/Madrid'); cali1.start();
    var cali2 = new cron.CronJob('00 55 05 * * *', function () {
        channel.send(caliID);
        channel.send({ embeds: [caliText] });
    }, null, true, 'Europe/Madrid'); cali2.start();
    var cali3 = new cron.CronJob('00 55 08 * * *', function () {
        channel.send(caliID);
        channel.send({ embeds: [caliText] });
    }, null, true, 'Europe/Madrid'); cali3.start();
    var cali4 = new cron.CronJob('00 55 15 * * *', function () {
        channel.send(caliID);
        channel.send({ embeds: [caliText] });
    }, null, true, 'Europe/Madrid'); cali4.start();
    var cali5 = new cron.CronJob('00 55 19 * * *', function () {
        channel.send(caliID);
        channel.send({ embeds: [caliText] });
    }, null, true, 'Europe/Madrid'); cali5.start();
    var cali6 = new cron.CronJob('00 25 00 * * *', function () {
        channel.send(caliID);
        channel.send({ embeds: [caliText] });
    }, null, true, 'Europe/Madrid'); cali6.start();

    // BATTLE ROYALE SCHEDULE
    var br1 = new cron.CronJob('00 05 12 * * *', function () {
        channel.send(brID);
        channel.send({ embeds: [brText] });
    }, null, true, 'Europe/Madrid'); br1.start();
    var br2 = new cron.CronJob('00 05 18 * * *', function () {
        channel.send(brID);
        channel.send({ embeds: [brText] });
    }, null, true, 'Europe/Madrid'); br2.start();
    var br3 = new cron.CronJob('00 05 19 * * *', function () {
        channel.send(brID);
        channel.send({ embeds: [brText] });
    }, null, true, 'Europe/Madrid'); br3.start();
    var br4 = new cron.CronJob('00 05 21 * * *', function () {
        channel.send(brID);
        channel.send({ embeds: [brText] });
    }, null, true, 'Europe/Madrid'); br4.start();
    var br5 = new cron.CronJob('00 05 22 * * *', function () {
        channel.send(brID);
        channel.send({ embeds: [brText] });
    }, null, true, 'Europe/Madrid'); br5.start();
    var br6 = new cron.CronJob('00 05 23 * * *', function () {
        channel.send(brID);
        channel.send({ embeds: [brText] });
    }, null, true, 'Europe/Madrid'); br6.start();
    var br7 = new cron.CronJob('00 05 00 * * *', function () {
        channel.send(brID);
        channel.send({ embeds: [brText] });
    }, null, true, 'Europe/Madrid'); br7.start();

    // RAINBOW BATTLE SCHEDULE
    var rbb1 = new cron.CronJob('00 35 18 * * *', function () {
        channel.send(rbbID);
        channel.send({ embeds: [rbbText] });
    }, null, true, 'Europe/Madrid'); rbb1.start();
    var rbb2 = new cron.CronJob('00 05 20 * * *', function () {
        channel.send(rbbID);
        channel.send({ embeds: [rbbText] });
    }, null, true, 'Europe/Madrid'); rbb2.start();

    // LOTTERY SCHEDULE
    var lot = new cron.CronJob('00 25 19 * * *', function () {
        channel.send(lotteryID);
        channel.send({ embeds: [lotteryText] });
    }, null, true, 'Europe/Madrid'); lot.start();
})

client.on('messageCreate', msg => {
    const prefix = config.prefix;
    const args = msg.content.slice(prefix.lenght).split(/ +/);
    const preCommand = args.shift().toLowerCase();
    const command = preCommand.substring(1);

    if (msg.content.startsWith(prefix)) {
        if (msg.author.id == "266369285708840963") {
            if (msg.startsWith(prefix)) {

            }
        }
    }
})

client.login(config.token);