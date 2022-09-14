const {
  MongoClient
} = require('mongodb');
const logger = require('../middlewares/logger');

class Mongo {
  constructor() {
    this.client = new MongoClient(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

  async main() {
    await this.client.connect();
    logger.ready('Connected to MongoDB');
    this.db = this.client.db('contact');
  }
}

module.exports = new Mongo();