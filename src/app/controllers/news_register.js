class NewsRegister {
  // [get ] /register
  index(req, res) {
    res.render('register')
  }
  // [get] /show
  show(req, res) {
    res.send('MAI !!!')
  }
}
module.exports = new NewsRegister()
// const new_rigister = require('./news_register.js')
