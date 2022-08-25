import React, { useState, useContext } from 'react'
import axios from 'axios'
import { ActiveContext } from '../context/actievContext'

const CreateTask = () => {
  const [{setActive}] = useContext(ActiveContext)
  const [errMsg, setErrMsg] = useState()
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
      setActive("all")
      console.log(res)
    } catch (err) {
      console.log(err.response.data.message)
      setErrMsg(err.response.data.message)
    }
  }
  return (
    <>
      <div className="div text-2xl font-bold mb-4">Create a Task</div>
      <div className="formWrapper">
        <form action="" className='flex flex-col w-1/3' onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Enter a title" className='py-2 px-4 mb-4 rounded-md border border-slate-200' onChange={(e) => setDetails({...details, title: e.target.value})}/>
          <textarea name="" id="" cols="30" rows="3" placeholder="Enter Description" onChange={(e) => setDetails({...details, desc: e.target.value})} className='py-2 px-4 mb-4 rounded-md border border-slate-200'></textarea>
          <label htmlFor="">Enter Start Time</label>
          <input type="datetime-local" name="" id="" onChange={(e) => setDetails({...details, start: e.target.value})} className='py-2 px-4 mb-4 rounded-md placeholder:text-slate-300 border border-slate-200'/>
          <label htmlFor="">Enter End Time</label>
          <input type="datetime-local" name="" id="" onChange={(e) => setDetails({...details, end: e.target.value})}className='py-2 px-4 mb-4 rounded-md placeholder:text-slate-300 border border-slate-200'/>
          <label htmlFor="" className='text-black mb-2'>Status</label>
          <select name="status" className='py-2 px-4 mb-4 rounded-md text-slate-400 border border-slate-200' onChange={(e) => setDetails({...details, status: e.target.value})}>
            <option value="">Select the status</option>
            <option value="Initiated" >Initiated</option>
            <option value="In Progress" >In Progress</option>
            <option value="Finished" >Finished</option>
          </select>
          <label htmlFor="" className='text-black mb-2'>Priority</label>
          <select name="priority" className='py-2 px-4 mb-4 rounded-md text-slate-400 border border-slate-200' onChange={(e) => setDetails({...details, priority: e.target.value})}>
            <option value="">Select the priority</option>
            <option value="Low" >Low</option>
            <option value="Medium" >Medium</option>
            <option value="High" >High</option>
          </select>
          <button type="submit" className='text-white bg-green-200 text-2xl font-bold shadow-md rounded-md hover:bg-green-400'>+</button>
        </form>
        <div className="errMsg text-red-500 italic text-lg mx-2 my-2">{errMsg}</div>
      </div>
    </>
  )
}

export default CreateTask
