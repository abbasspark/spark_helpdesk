const app = require("./tools/server");
const { runServer } = require("./tools/server-tools");
const chalk = require("chalk");
const config = require("./config");
const models = require("./models");
// create server
let start = async (port = config.port) => {
  models.sequelize.sync().then(async function () {
    const httpServer = await runServer({
      app,
      port,
      onHTTP() {
        console.log(chalk`{yellow HTTP SERVER} enabled is {green online} on PORT:${port}`);
      },
    });

    const kill = () => {
      httpServer.close();
      process.exit(0);
    };

    process.on("message", (msg) => {
      if (msg === "death") kill();
    });

    process.on("SIGTERM", kill);
    process.on("SIGINT", kill);
  });
};

module.exports = { start };
