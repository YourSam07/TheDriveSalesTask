import React from 'react'
import pic from "../images/pic2.jpg"

const Navbar = () => {
  return (
    <>
      <div className="nav-wrapper h-16 w-full bg-slate-50 flex justify-between items-center px-4 shadow-md">
        <div className="logo font-poppins">
          CRUD Task Ops
        </div>
        <div className="user flex items-center gap-4">
          <div className="circle">
            <img src={pic} alt="" className='rounded-full h-[35px] w-[35x]'/>
          </div>
          <div className="name">Antonia Albuqurque</div>
        </div>
      </div>
    </>
  )
}

export default Navbar