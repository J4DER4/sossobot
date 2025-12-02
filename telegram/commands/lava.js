let lava = 0;
const photoURL = 'https://raw.githubusercontent.com/EgoTastic/sossobot/master/telegram/00.png';

const handler = (ctx) => {
    lava++;
    if (lava % 7 === 0) {
        lava = 0
        try {
            ctx.replyWithPhoto(photoURL);
            ctx.reply('nyt pitäs lava näkyy')
        } catch (error) {
            console.log(error);
            ctx.reply('Error sending photo.');
        }
    } else {
        try {
            ctx.reply('lavalla odottelemassa: ' + lava)
        } catch (error){

            console.log(error);
            ctx.reply('Error sending lava count.');
        }
    }
};

const commands = [
    '00_00_lavan_oikee_puoli',
    '00_00_lavan_oikea_puoli',
    'lavan_oikee_puoli',
    'lavan_oikea_puoli',
]

module.exports = {
    register: (bot, middleware) => {
        for (const command of commands) {
            bot.command(command, middleware, handler);
        }
    }
};
