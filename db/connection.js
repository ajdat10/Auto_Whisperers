require("dotenv").config()
const mongoose = require('mongoose')
// const MONGO_URI = process.env.MONGO_URI

const connection = mongoose.connect(process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : 'mongodb://localhost:27017/autoWhisperersDatabase', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
module.exports = connection