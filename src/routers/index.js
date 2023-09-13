const newRigister = require('./register')
const course = require('./course')
const update = require('./me')
const site_controller = require('./site')
function router(app) {
  app.use('/register', newRigister)
  app.use('/me', update)
  app.use('/course', course)
  app.use('/', site_controller)
}
module.exports = router
