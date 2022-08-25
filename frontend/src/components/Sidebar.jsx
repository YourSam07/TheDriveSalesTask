import React from 'react'
import { useContext } from 'react'
import { ActiveContext } from '../context/actievContext'

const Sidebar = () => {
  const [{active, setActive}] = useContext(ActiveContext)
  console.log(active)

  const makeActive = (opt) => {
    setActive(opt)
  }
  return (
    <>
      <div className="sidebarWrapper flex flex-col pt-4 h-full">
        <div className="options flex-1">
          <div className={active === "all" ? "text-white font-semibold text-xl px-8 py-4 bg-black hover:cursor-pointer" : "text-black font-semibold text-xl px-8 py-4 hover:bg-slate-100 hover:cursor-pointer"} onClick={() => makeActive("all")}>
            <span>All Tasks</span>
          </div>
          <div className={active === "create" ? "text-white font-semibold text-xl px-8 py-4 bg-black hover:cursor-pointer" : "text-black font-semibold text-xl px-8 py-4 hover:bg-slate-100 hover:cursor-pointer"} onClick={() => makeActive("create")}>
            <span>Create Task</span>
          </div>
        </div>
        <div className="flex-2 text-xl px-8 py-4 hover:bg-black hover:text-white hover:cursor-pointer">Logout</div>
      </div>
    </>
  ) 
}

export default Sidebar
