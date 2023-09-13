const express = require('express')
const router = express.Router()
const news_register = require('../app/controllers/news_register')
router.get('/show', news_register.show)
router.get('/index', news_register.index)

module.exports = router
