require('dotenv').config()
const redis = require('redis');
const client = redis.createClient(process.env.PORT_REDIS);
const MiscHelper = require('../helpers/helpers')

module.exports = {
  cacheGetAllBooks: (req, res, next)=>{
    client.get('getallbooks', (err, data)=>{
      if (err) throw err;

      if (data !== null){
        MiscHelper.response(res, JSON.parse(data), 200);
      }else{
        next();
      }
      })
    },
    clearGetAllBooks: (req, res, next)=>{
        client.del('getallbooks');
        next();
  }
}