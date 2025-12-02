const { setPaused } = require('../state');

module.exports = (ctx) => {
  setPaused(true);
  ctx.reply('All hail the overlord!');
};
