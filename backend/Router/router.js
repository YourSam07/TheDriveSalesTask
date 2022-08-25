const express = require('express')
const router = express.Router()
const {getAllTasks, createTask, updateTask, deleteTask} = require('../Controllers/taskOps')

//Routes
router.route('/get').get(getAllTasks)
router.route('/create').post(createTask)
router.route('/update/:id').put(updateTask)
router.route('/remove/:id').delete(deleteTask)

module.exports = router