import React from 'react'
import { Link, Outlet} from 'react-router-dom'
export default function Home() {
  return (
    <div className="panel flex">
      <div className="side-menu h-dvh w-[250px] bg-black ">
        <div className="logo text-3xl text-white/50 pt-3 text-center">Task2</div>
        <div className="menu-items text-blue-500 m-10 text-2xl">
          <ul>
            <li className="p-4"><Link to="General">General</Link></li>
            <li className="p-4"><Link to="Users">Users</Link></li>
            <li className="p-4"><Link to="Settings">Settings</Link></li>
            <li className="p-4"><Link to="LogOut">LogOut</Link></li>
          </ul>
        </div>
      </div>
      <div className="panel-view p-10 m-5 bg-black w-full rounded-xl shadow-lg">
        <Outlet />
      </div>
    </div>
  )
}
