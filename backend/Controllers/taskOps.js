const asyncHandler = require('express-async-handler')
const { findByIdAndUpdate } = require('../Models/taskModel')
const tasks = require('../Models/taskModel')

//@desc Get all tasks
//@route GET /tasks
const getAllTasks = asyncHandler(async(req, res) => {
  const allTasks = await tasks.find()
  res.status(200).json(allTasks)
})

//@desc Create a task
//@route POST /create
const createTask = asyncHandler(async(req, res) => {
  if(!req.body.title || !req.body.start || !req.body.end || !req.body.priority || !req.body.status){
    res.status(400)
    throw new Error('Please fill all the fields.')
  }

  const task = await tasks.create({
    title: req.body.title,
    description: req.body.desc,
    start: req.body.start,
    end: req.body.end,
    priority: req.body.priority,
    status: req.body.status,
  })
  console.log(task)
  res.status(200).json(task)
})

//@desc Update the status, start, deadline of task
//@route PUT /update
const updateTask = asyncHandler(async(req, res) => {
  const task = await tasks.findById(req.params.id)

  if (!task){
    res.status(400)
    throw new Error('No such Task found')
  }

  const updatedTask = await tasks.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.desc,
    start: req.body.start,
    end: req.body.end,
    status: req.body.status,
    priority: req.body.priority,
  },
  {
    new: true
  })
  res.status(200).json(updatedTask)
})

//@desc Remove or Delete a task
//@route DELETE /remove
const deleteTask = asyncHandler(async(req, res) => {
  const task = await tasks.findById(req.params.id)
  console.log(task)
  if(!task){
    res.status(400)
    throw new Error("Cannot find the task you want to delete")
  }

  await task.remove()
  res.status(200).json({id: req.params.id})
})

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
}