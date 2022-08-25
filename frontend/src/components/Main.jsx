import React, { useContext } from 'react'
import { ActiveContext } from '../context/actievContext'
import AllTasks from './AllTasks'
import CreateTask from './CreateTask'

const Main = () => {
  const [{active}] = useContext(ActiveContext)
  console.log(active)

  const renderOption = () => {
    if (active === "all") 
      return <AllTasks />
    if (active === "create")
      return <CreateTask />
  }
  return (
    <>
      {renderOption()}
    </>
  )
}

export default Main