import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className="w-full min-h-[89vh] bg-blue-500 flex justify-center items-center">
      <NavLink to='/portfolio/web' >
        web
      </NavLink>
      <Outlet/>
    </div>
  )
}

export default Portfolio