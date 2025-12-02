module.exports = (bot) => async (ctx) => {
  const sikID = process.env.SIKID;
  const message = ctx.message.text.replace('/postaa ', '').trim();

  if (message && message !== '/postaa') {
    try {
      await bot.telegram.sendMessage(sikID, message);
    } catch (error) {
      console.log(error);
      ctx.reply('Error posting message.');
    }
  }
};
