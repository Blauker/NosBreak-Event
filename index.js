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
    const wbText = new MessageEmbed()
        .setColor(0xff2600) 
        .setTitle("World Boss will start in 5 minutes")
        .setImage('https://i.postimg.cc/kg2mT2Hs/wb.png');

    const penguinText = "<@&1081403465017872404> will start in 5 minutes [Channel 1]";

    var wb1 = new cron.CronJob('20 05 20 * * *', function () {
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