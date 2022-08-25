const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  title:{
    type: String,
    required: [true, "Please add a title"]
  },
  description:{
    type: String,
  },
  start:{
    type: Date,
    required: [true, "Please mention start time and date"]
  },
  end:{
    type: Date,
    required: [true, "Please mention the deadline"]
  },
  priority:{
    type: String,
    required: [true, "Please select a priority"]
  },
  status:{
    type: String,
    required: [true, "Please update the status"]
  }
})

module.exports = mongoose.model('Task Details', taskSchema)