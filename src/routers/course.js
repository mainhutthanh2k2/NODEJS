const express = require('express')
const router = express.Router()
const Course_controller = require('../app/controllers/Course_controller')
// :slug la lay slug trong mongodb
router.get('/create', Course_controller.create)
router.post('/store', Course_controller.store) //them bai hat
router.post('/perform_delete', Course_controller.perform_delete) // button delete
router.post('/permanently_deleted_trash', Course_controller.permanently_deleted_trash) // button delete
router.put('/:id', Course_controller.save_edit)
router.get('/:id/edit', Course_controller.edit)
router.get('/:slug', Course_controller.show)
router.delete('/:id', Course_controller.deletee)
router.delete('/:id/permanently_deleted', Course_controller.permanently_deleted) // xoa vinh vien
router.patch('/:id/restore', Course_controller.restore) //sua restore


module.exports = router
