const { setPaused } = require('../state');

module.exports = (ctx) => {
  setPaused(false);
  ctx.reply('Sössö kuumana');
};
