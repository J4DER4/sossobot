const { getQuote, findQuote } = require('../../sossoquotes');

module.exports = async (ctx) => {
  const category = ctx.message.text.split(' ')[1];
  let message;

  if (category) {
    message = await findQuote(category);
    if (!message) {
      message = 'Ei sammakkoa hakukriteerillä';
    }
  } else {
    const arvonta = Math.floor(Math.random() * 20);
    const date = new Date();
    const month = date.getMonth();

    if (month === 11 && arvonta === 0) {
      const audioURL =
        'https://raw.githubusercontent.com/EgoTastic/sossobot/master/telegram/Hyvaa_Joulua.mp3';
      try {
        await ctx.replyWithAudio(audioURL);
      } catch (error) {
        console.log(error);
        ctx.reply('Error sending audio.');
      }
      return;
    }

    message = await getQuote();
  }

  ctx.reply(message);
};
