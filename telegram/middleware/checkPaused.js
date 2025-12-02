const { isPaused } = require('../state');

const checkPaused = (ctx, next) => {
  if (isPaused()) {
    // If the bot is paused, only overlords can proceed.
    const overlordId = process.env.OVERLORDID;
    const overlordId2 = process.env.OVERLORDID2;
    if (
      ctx.from &&
      (ctx.from.id.toString() === overlordId || ctx.from.id.toString() === overlordId2)
    ) {
        // an overlord can bypass the pause for some commands (like /overlord_start)
        // but the commands that should be paused will have another check.
        // This middleware is for commands that should NOT run when paused.
    } else {
        return; // do nothing for normal users when paused
    }
  }
  return next();
};

const notPaused = (ctx, next) => {
    if (!isPaused()) {
        return next();
    }
    // if paused, only overlords can proceed
    const overlordId = process.env.OVERLORDID;
    const overlordId2 = process.env.OVERLORDID2;
    if (
        ctx.from &&
        (ctx.from.id.toString() === overlordId || ctx.from.id.toString() === overlordId2)
      ) {
          return next();
      }
}


module.exports = { checkPaused, notPaused };
