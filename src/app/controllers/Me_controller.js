const Course = require('../models/Couse')
const { mutipleMongooseToObject } = require('../../until/mongoose')
class Me_controller {
  // trang co thung rac
  // [get] /me/store/course
  update(req, res, next) {
    //res.json(res.locals._sort)
    // viet vao { deletedAt: null}
    Promise.all([ Course.find({}).sortTable(req), Course.countDocumentsDeleted()])
      .then(([update, countDelete]) => {
        res.render('Me_update/me_update', {
          countDelete,
          update: mutipleMongooseToObject(update),
        })
      })
      .catch(next)
    // Course.countDeleted()
    //   .then((countDelete) => {
    //     console.log(countDelete)
    //   })
    //   .catch(()=>{})
    //   //
    // Course.find({})
    //   .then((update) =>
    //     res.render('Me_update/me_update', {
    //       update: mutipleMongooseToObject(update),
    //     }),
    //   )
    //   .catch(next)
  }
  // [get] /me/Trash/course
  // findDeleted tra ve cac file da xoa
  Trash(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .then((update) =>
        res.render('Me_update/trash', {
          update: mutipleMongooseToObject(update),
        }),
      )
      .catch(next)
  }
}
module.exports = new Me_controller()
// const new_rigister = require('./news_register.js')
