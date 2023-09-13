const Course = require('../models/Couse')
const { mutipleMongooseToObject } = require('../../until/mongoose')
class SiteController {
  // [get ] /home
  home(req, res, next) {
    Course.find({})
      .then((course) => {
        res.render('home', {
          course: mutipleMongooseToObject(course),
        })
      })
      .catch((erro) => next(erro))
  }
  // [get] /search
  search(req, res) {
    res.send('search!!!')
  }
}
module.exports = new SiteController()
// const new_rigister = require('./news_register.js')
