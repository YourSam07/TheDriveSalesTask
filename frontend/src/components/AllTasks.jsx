import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

const AllTasks = () => {
  const [Tasks, setTasks] = useState()
  const getTasks = async () => {
    try{
      const res = await axios.get("http://localhost:5000/tasks/get")
      console.log(res.data)
      setTasks(res.data)
    } catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getTasks()
  }, [])
  console.log(Tasks)
  return (
    <>
    <div className="div text-2xl font-bold mb-4">All Tasks</div>
    {Tasks ? Tasks.map((item) => {
      // const sdate = new Date(item.start)
      // const edate = new Date(item.end)
      // console.log(sdate, edate)
      
      return (
        <Card
        id = {item._id}
        title = {item.title}
        desc = {item.description}
        start = {item.start}
        end = {item.end}
        status = {item.status}
        priority = {item.priority}
        func = {getTasks}
        />
      )
    }) : 
      <div className='text-center text-2xl'>No tasks to Complete. Please create new Tasks...</div>
    }
    </>
  )
}

export default AllTasks