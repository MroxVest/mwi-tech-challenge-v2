const app = require('./server2/server');
const logger = require('./server2/middlewares/logger');
const mongo = require('./server2/data/db');
const port = process.env.PORT || 5000;

const main = async () => {
  await mongo.main();
  app.locals.db = mongo.db;
  app.listen(port, () => {
    logger.ready(`Listening: http://localhost:${port}`);
  });
};

main();