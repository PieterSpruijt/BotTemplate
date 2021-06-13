const { readdirSync } = require("fs");
module.exports = (client) => {
  readdirSync("./commands/").map((dir) => {
    const commands = readdirSync(`./commands/${dir}/`).map((cmd) => {
      let pull = require(`../commands/${dir}/${cmd}`);
      client.commands.set(pull.name, pull);
      if (pull.aliases) {
        pull.aliases.map((p) => client.commands.set(p, pull));
      }
    });
  });
};
