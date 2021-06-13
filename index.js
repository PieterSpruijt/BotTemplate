const Discord = require("discord.js");
const config = require('./config');
const client = new Discord.Client();

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

["command"].forEach((handler) => {
    require(`./handlers/${handler}`)(client);
});
client.on("ready", async () => {
    require('./events/client/ready')(client);
});

client.on("message", async (message) => {
    require('./events/guild/message')(client, message);
});

client.login(config.token);