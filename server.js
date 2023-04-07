const app = require("./src/app");
require("dotenv").config("./.env");
env = process.env;



app.listen(env.PORT, (req, res) => {
   console.info(`SERVER START on ${env.HOSTNAME}:${env.PORT}`)
});