const axios = require('axios');
const cheerio = require('cheerio');

const date = new Date();
const daynum = date.getDate();
const paddedDaynum = String(daynum).padStart(2, '0');
const pageUrl = 'https://sosso.fi/sheet/' + paddedDaynum + '-12-2025/';

module.exports = async (ctx) => {
    try {
        console.log(`Fetching calendar page: ${pageUrl}`);
        const { data } = await axios.get(pageUrl);
        const $ = cheerio.load(data);

        const calendarDayDiv = $('div.calendar-day');

        // Extract the text content from the first <p> tag within the calendarDayDiv
        const textAboveImage = calendarDayDiv.find('p').first().text().trim();

        // Find the image within the calendar day div
        const imageUrl = calendarDayDiv.find('img').first().attr('src');

        if (textAboveImage) {
            console.log(`Found text: ${textAboveImage}`);
            await ctx.reply("Joulukalenterin luukku: " + daynum);
            await ctx.reply(textAboveImage);
        }

        if (imageUrl) {
            console.log(`Found image URL: ${imageUrl}`);
            await ctx.replyWithPhoto(imageUrl);
        } else {
            console.log('Image not found on page, sending link instead.');
            await ctx.reply(`Luukkua ei löytynyt kuvana, tässä linkki: ${pageUrl}`);
        }
    } catch (error) {
        console.error('Error fetching Joulukalenteri page:', error);
        await ctx.reply('Pahoittelut, joulukalenterin luukun avaamisessa tapahtui virhe.');
    }
};
