const express = require('express')
const router = express.Router()
const Me_controller = require('../app/controllers/Me_controller')
// :slug la lay slug trong mongodb

router.get('/store/course', Me_controller.update)
router.get('/Trash/course', Me_controller.Trash)



module.exports = router
