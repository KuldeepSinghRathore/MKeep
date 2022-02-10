import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const SideBarRow = ({ setSideBar }) => {
  const navigate = useNavigate()
  const { labels, isLoggedIn } = useSelector((state) => state.users)
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

      {labels.map((label, index) => (
        <div
          className="hidden md:visible md:inline-flex w-fit  text-xl py-1 px-3 uppercase items-center justify-center md:justify-start bg-slate-300 m-2"
          key={index}
        >
          <p className=" ">{label}</p>
        </div>
      ))}
      <div className="inline-flex md:hidden gap-5 w-full font-bold items-center justify-center flex-col">
        {!isLoggedIn && (
          <span
            onClick={() => {
              navigate("/login")
              setSideBar(false)
            }}
          >
            Login
          </span>
        )}
        <span
          className="cursor-pointer"
          onClick={() => {
            navigate("/logout")
            setSideBar(false)
          }}
        >
          LogOut
        </span>
      </div>
    </div>
  )
}
