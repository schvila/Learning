const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
// 'mongodb+srv://maximilian:9u4biljMQc4jjqbe@cluster0-ntrwp.mongodb.net/shop?retryWrites=true'
const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://standa:rnEZ3rjw3lf9J7Bh@cluster0.5tfx5.mongodb.net/myFirstDatabase?retryWrites=true'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
