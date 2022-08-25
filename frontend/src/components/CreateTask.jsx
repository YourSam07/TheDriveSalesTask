import React, { useState } from 'react'
import axios from 'axios'

const CreateTask = () => {
  const [details, setDetails] = useState({
    title: '',
    desc: '',
    start: new Date(),
    end: new Date(),
    status: "",
    priority: "",
  })
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(details)
    try{
      const res = await axios.post("https://thedrivesalestask.herokuapp.com/tasks/create", details)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <div className="div text-2xl font-bold mb-4">Create a Task</div>
      <div className="formWrapper">
        <form action="" className='flex flex-col w-1/3' onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Enter a title" className='py-2 px-4 mb-4 rounded-md border border-slate-200' onChange={(e) => setDetails({...details, title: e.target.value})}/>
          <textarea name="" id="" cols="30" rows="5" placeholder="Enter Description" onChange={(e) => setDetails({...details, desc: e.target.value})} className='py-2 px-4 mb-4 rounded-md border border-slate-200'></textarea>
          <label htmlFor="">Enter Start Time</label>
          <input type="datetime-local" name="" id="" onChange={(e) => setDetails({...details, start: e.target.value})} className='py-2 px-4 mb-4 rounded-md placeholder:text-slate-300 border border-slate-200'/>
          <label htmlFor="">Enter End Time</label>
          <input type="datetime-local" name="" id="" onChange={(e) => setDetails({...details, end: e.target.value})}className='py-2 px-4 mb-4 rounded-md placeholder:text-slate-300 border border-slate-200'/>
          <select name="status" className='py-2 px-4 mb-4 rounded-md text-black border border-slate-200' onChange={(e) => setDetails({...details, status: e.target.value})}>
            <option value="">Select the status</option>
            <option value="Initiated" className="text-black">Initiated</option>
            <option value="In Progress" className="text-black">In Progress</option>
            <option value="Finished" className="text-black">Finished</option>
          </select>
          <select name="priority" className='py-2 px-4 mb-4 rounded-md textblack border border-slate-200' onChange={(e) => setDetails({...details, priority: e.target.value})}>
            <option value="">Select the priority</option>
            <option value="Low" className="text-black">Low</option>
            <option value="Medium" className="text-black">Medium</option>
            <option value="High" className="text-black">High</option>
          </select>
          <button type="submit" className='text-white bg-green-200 text-2xl font-bold shadow-md rounded-md hover:bg-green-400'>+</button>
        </form>
      </div>
    </>
  )
}

export default CreateTask
