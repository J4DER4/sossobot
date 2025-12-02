const commands = {
  mita_sahko_tekee: 'Sähkö jakaa!\nSähkö jakaa!\nSähkö jakaa!\nSähkö jakaa!',
  ok:
    'iha ok, mut ootteko kattonu simpsonit sarjasta jakson himo läski homer :D siinä esiintyy koko simpsonit perhe eli myös bart simpsons homer poika fanit saavat nauraa ja naurattaahan se tietty myös vaikka homerin läski kuteet ja muut :D kannattaa kattoo nopee',
  jappadaida: 'Hyvä KIK!',
  ez4sik: 'https://soundcloud.com/the-haalarz/ez4sik',
  perjantai: 'https://www.ukko.fi/pojat',
  vittu: 'kyllä se siitä..'
};

module.exports = {
  register: (bot, middleware) => {
    for (const [command, message] of Object.entries(commands)) {
      bot.command(command, middleware, (ctx) => ctx.reply(message));
    }
  },
};
