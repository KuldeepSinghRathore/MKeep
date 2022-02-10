import React, { useState } from "react"
import { HiOutlineUser } from "react-icons/hi"
import { AiOutlineMenuUnfold } from "react-icons/ai"
import { SideBarRow } from "./SideBarRow"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export const Header = () => {
  const [toggleSideBar, setSideBar] = useState(false)
  const users = useSelector((state) => state.users)
  return (
    <div className="flex  bg-white shadow-md p-5 h-18 justify-between fixed left-0 right-0 top-0 ">
      <div>
        <Link to="/" className="font-extrabold ">
          MKeep
        </Link>
      </div>
      <AiOutlineMenuUnfold
        size={25}
        className="md:invisible"
        onClick={() => setSideBar(true)}
      />
      {/* Mobile Nav */}
      {toggleSideBar && (
        <div className=" absolute md:hidden top-0 right-0 bottom-0 z-20 opacity-1 w-full h-screen bg-slate-300 	">
          <SideBarRow setSideBar={setSideBar} />
        </div>
      )}
      {/* Desktop Nav */}
      <div className="hidden md:inline-flex gap-5 font-bold items-center">
        {!users.isLoggedIn && <Link to="/login">Login</Link>}
        <Link to="/logout">
          <HiOutlineUser size={20} />
        </Link>
      </div>
    </div>
  )
}
