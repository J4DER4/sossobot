const isOverlord = (ctx, next) => {
  const overlordId = process.env.OVERLORDID;
  const overlordId2 = process.env.OVERLORDID2;

  if (
    ctx.from &&
    (ctx.from.id.toString() === overlordId || ctx.from.id.toString() === overlordId2)
  ) {
    return next();
  }
};

module.exports = { isOverlord };
