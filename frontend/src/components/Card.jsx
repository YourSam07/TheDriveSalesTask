import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "35%"
  },
};

Modal.defaultStyles.overlay.backgroundColor = '#0000008e';

const Card = ({ id, title, desc, start, end, status, priority, func }) => {
  const [details, setDetails] = useState({
    title,
    desc,
    start,
    end,
    status,
    priority,
  })
  const update = async (id) => {
    try {
      const res = await axios.put(`https://thedrivesalestask.herokuapp.com/tasks/update/${id}`, details)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  const remove = async (id) => {
    try {
      const res = await axios.delete(`https://thedrivesalestask.herokuapp.com/tasks/remove/${id}`)
      func()
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
  const [isModalOpen, setIsModalOpen] = useState(false)
  const OpenModal = () => {
    setIsModalOpen(true)
  }
  function CloseModal() {
    setIsModalOpen(false)
  }

  return (
    <div className="cardWrapper shadow-md rounded-md w-full h-[15%] bg-slate-50 text=black flex items-center mb-4 p-4 gap-2">
      <div className="w-[46%] flex flex-col">
        <div className="text-xl">{title}</div>
        <p className="text-md">{desc}</p>
      </div>
      <div className="w-[30%] flex flex-col text-md">
        <div className="start">Updated on: {moment(new Date(start)).format('MMMM Do YYYY, h:mm:ss')}</div>
        <div className="end">Finish Before: {moment(new Date(start)).format('MMMM Do YYYY, h:mm:ss')}</div>
      </div>
      <div className="w-[15%] flex flex-col text-md">
        <div className="start">Priority: {priority}</div>
        <div className="end">Status: {status}</div>
      </div>
      <div className="w-[10%] flex flex-col gap-2">
        <button className='bg-blue-500 text-black rounded-md hover:bg-blue-300' onClick={() => OpenModal()}>Update</button>
        <button className='bg-red-500 text-black rounded-md hover:bg-red-300' onClick={() => remove(id)}>Delete</button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={CloseModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
      >
        <div className="head text-2xl font-bold mb-4">Update</div>
        <form action="" className='flex flex-col' onSubmit={() => update(id)}>
          <input defaultValue={details.title} type="text" placeholder="Enter a title" className='py-2 px-4 mb-4 rounded-md border border-slate-200' onChange={(e) => setDetails({ ...details, title: e.target.value })} />
          <textarea defaultValue={details.desc} cols="30" rows="5" placeholder="Enter Description" onChange={(e) => setDetails({ ...details, desc: e.target.value })} className='py-2 px-4 mb-4 rounded-md border border-slate-200'></textarea>
          <label htmlFor="">Enter Start Time (Current Time: {moment(new Date(start)).format('MMMM Do YYYY, h:mm:ss')})</label>
          <input type="datetime-local" onChange={(e) => setDetails({ ...details, start: e.target.value })} className='py-2 px-4 mb-4 rounded-md placeholder:text-slate-300 border border-slate-200' />
          <label htmlFor="">Enter End Time (Current Time: {moment(new Date(start)).format('MMMM Do YYYY, h:mm:ss')})</label>
          <input type="datetime-local" name="" id="" onChange={(e) => setDetails({ ...details, end: e.target.value })} className='py-2 px-4 mb-4 rounded-md placeholder:text-slate-300 border border-slate-200' />
          <select name="status" defaultValue={details.status} className='py-2 px-4 mb-4 rounded-md text-slate-400 placeholder:text-slate-300 border border-slate-200' onChange={(e) => setDetails({ ...details, status: e.target.value })}>
            <option value="">Select the status</option>
            <option value="Initiated">Initiated</option>
            <option value="In Progress">In Progress</option>
            <option value="Finished">Finished</option>
          </select>
          <select name="priority" defaultValue={details.priority} className='py-2 px-4 mb-4 rounded-md text-slate-400 placeholder:text-slate-300 border border-slate-200' onChange={(e) => setDetails({ ...details, priority: e.target.value })}>
            <option value="">Select the priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button type="submit" className='text-white bg-green-200 text-2xl font-bold shadow-md rounded-md hover:bg-green-400'>+</button>
        </form>
      </Modal>
    </div>

  )
}

export default Card