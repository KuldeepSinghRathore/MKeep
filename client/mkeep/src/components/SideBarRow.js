import React from "react"
import { HiOutlineUser } from "react-icons/hi"
const label = ["lane", "note", "notebook", "tag", "user"]
export const SideBarRow = ({ setSideBar }) => {
  return (
    <div className="p-3">
      <button
        onClick={() => setSideBar(false)}
        className="absolute right-0 top-0 p-2 md:hidden"
      >
        Close
      </button>
      <div>
        <h2 className="text-2xl mt-2 mb-2 text-center">MKeep</h2>
      </div>

      {label.map((label, index) => (
        <div
          className="hidden md:visible md:inline-flex w-fit  text-xl py-1 px-3 uppercase items-center justify-center md:justify-start bg-slate-300 m-2"
          key={index}
        >
          <p className=" ">{label}</p>
        </div>
      ))}
      <div className="inline-flex md:hidden gap-5 w-full font-bold items-center justify-center flex-col">
        <HiOutlineUser size={20} />
        <span>Login</span>
        <span>Logout</span>
      </div>
    </div>
  )
}
