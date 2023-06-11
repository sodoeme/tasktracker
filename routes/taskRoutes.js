const express = require('express')
const router = express.Router()
const {isLoggedIn} = require('../middleware/isLoggedIn')
const taskController = require('../controllers/taskController')
router.route('/')
    .get( isLoggedIn, taskController.getAllTasks)
    
    .post(taskController.createTask)
router.route('/:id')
.delete(taskController.delete)

router.route('/save/:id')
.put(taskController.editTask)

router.route('/edit/:id')
.put(taskController.changeEdit)
module.exports = router