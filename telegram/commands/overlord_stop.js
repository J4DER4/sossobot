const { setPaused } = require('../state');

module.exports = (ctx) => {
  setPaused(true);
  ctx.reply('Sössö menee juomatauolle');
};
