require('dotenv').config();
const { Telegraf } = require('telegraf');
const { isOverlord } = require('./middleware/isOverlord');
const { notPaused } = require('./middleware/checkPaused');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Command imports
const overlordStartHandler = require('./commands/overlord_start');
const overlordStopHandler = require('./commands/overlord_stop');
const reloadQuotesHandler = require('./commands/reloadQuotes');
const moiHandler = require('./commands/moi');
const postaaHandler = require('./commands/postaa')(bot);
const sammakkoHandler = require('./commands/sammakko');
const staticCommands = require('./commands/static');
const lavaCommands = require('./commands/lava');
const audioTestHandler = require('./commands/audio_test');
const eikuHandler = require('./commands/eiku.js');
const onemaHandler = require('./commands/onema.js');
const joulukalenteriHandler = require('./commands/joulukalenteri.js');

// Register commands
// Overlord commands
bot.command('overlord_start', isOverlord, overlordStartHandler);
bot.command('overlord_stop', isOverlord, overlordStopHandler);
bot.command('reloadQuotes', isOverlord, reloadQuotesHandler);
bot.command('postaa', isOverlord, postaaHandler);
bot.command('audio_test', isOverlord, audioTestHandler);

// Public commands
bot.hears('moi', notPaused, moiHandler);
bot.command('sammakko', notPaused, sammakkoHandler);
bot.command('joulukalenteri', notPaused, joulukalenteriHandler);
bot.hears(/eiku/, notPaused, eikuHandler);
bot.hears(/onema/, notPaused, onemaHandler);

bot.hears("tänää", ctrx => {
    ctrx.reply("tänää");
})

// Register static and lava commands with the notPaused middleware
staticCommands.register(bot, notPaused);
lavaCommands.register(bot, notPaused);


const startTelegramBot = async () => {
    try {
        await bot.launch();
        console.log('Telegram up');
    } catch (error) {
        console.log('Telegram connection failed', error);
        process.exit(1);
    }
};

module.exports = {
    startTelegramBot,
};
