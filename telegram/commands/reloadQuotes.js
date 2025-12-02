const { loadQuotes } = require('../../sossoquotes');

module.exports = async (ctx) => {
  try {
    await loadQuotes();
    ctx.reply('Quotes reloaded!');
  } catch (error) {
    console.log(error);
    ctx.reply('Error reloading quotes.');
  }
};
