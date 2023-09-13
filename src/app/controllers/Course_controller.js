const Course = require('../models/Couse')
const { mongooseToObject } = require('../../until/mongoose')
class Course_controller {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((coures) => {
        res.render('show/show')
      })
      .catch(next)
  }
  // nếu để action trống nó tự action create
  // [get]   course/create
  create(req, res, next) {
    res.render('show/create')
  }
  // action
  //[post] show/store
  store(req, res, next) {
    // res.json(req.body)
    req.body.img = `https://i.ytimg.com/vi/${req.body.videoid}/hqdefault.jpg`
    const save = new Course(req.body)
    save
      .save()
      .then((boss) => res.redirect('/'))
      .catch(next)
    // res.send("seccess")
  }
  // [get] slug /:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render('show/edit', {
          course: mongooseToObject(course),
        }),
      )
      .catch(next)
  }
  // [put] slug /:id/edit
  save_edit(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/store/course'))
      .catch(next)
  }
  // [delete]/course/:id
  deletee(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }
  // [delete]/course/:id/permanently_deleted xoa vinh vien
  permanently_deleted(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }
  // [patch]/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }
  // [post]/course/perform_delete
  perform_delete(req, res, next) {
    // res.json(req.body)
    // id-checkbox tra ve mang nen dung doc mongoose
    switch(req.body.action){
      case 'delete':
        Course.delete({ _id:{$in: req.body.id_checkbox }})
        .then(() => res.redirect('back'))
        .catch(next)
        break
      default:
        res.json({messeger: 'erro '})  
    }
  }
  permanently_deleted_trash(req, res, next){
    // res.json(req.body.checkbox_restore)
    switch(req.body.action){
      case 'restore':
        Course.updateOne({ _id:{$in: req.body.checkbox_restore}})
        .then(() => res.redirect('back'))
        .catch(next)
        break
      case 'delete':
        Course.deleteOne({ _id:{$in: req.body.checkbox_restore }})
        .then(() => res.redirect('back'))
        .catch(next)
        break
      default: 
        res.json({messeger: 'Erro'})
    }

  }
}

module.exports = new Course_controller()
// const new_rigister = require('./news_register.js')
