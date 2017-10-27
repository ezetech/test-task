const mongoose = require('mongoose');
const {mongoDB} = require('./config');

mongoose.connect(mongoDB.connectionString, { useMongoClient: true });
mongoose.Promise = global.Promise;

require('./init');
// require('./apiServer');
