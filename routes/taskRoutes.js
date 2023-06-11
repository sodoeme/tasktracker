const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')

router.route('/')
    .get(taskController.getAllTasks)
    
    .post(taskController.createTask)
router.route('/:id')
.delete(taskController.delete)

router.route('/save/:id')
.put(taskController.editTask)

router.route('/edit/:id')
.put(taskController.changeEdit)
module.exports = router