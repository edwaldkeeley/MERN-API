const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (err) {
    console.error(`Error: ${err.message}`.red.underline.bold)
    process.exit(1)
  }
}

module.exports = connectDB
