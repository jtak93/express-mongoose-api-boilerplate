// enter env variables/config here

module.exports = {
  mongo: {
    url: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/dbname'
  },
}
