const config = require('../../config');

module.exports = async (client) => {
  setInterval(() => {
    const index = Math.floor(Math.random() * (StatusList.length - 1) + 1);
    c;ient.user.setActivity(StatusList[index]);
  }, 30000); // Runs this every 30 seconds.
  const StatusList = [
    ` in ${client.guilds.cache.size} guilds`,
    `${config.prefix}help`
  ];
};