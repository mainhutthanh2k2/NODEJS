const mongoose = require('mongoose')
async function connect_mongodb() {
  try {
    await mongoose.connect('mongodb://127.0.0.1/DATA', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // node: 49436 useCreateindex: true
    })
    console.log('seccess')
  } catch (error) {
    console.log('fail')
  }
}
module.exports = { connect_mongodb }
