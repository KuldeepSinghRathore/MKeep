import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logOutPressed } from "./userSlice"

export const LogOut = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { username, email } = useSelector((state) => state.users)
  return (
    <div className="mx-auto w-fit mt-20  flex flex-col ">
      <h1 className="font-extrabold bg-gray-300 mt-10 ">
        Want To Logout Out!!
      </h1>
      <p className="mt-2 mb-2">
        <span className="font-extrabold bg-gray-300 mt-10 ">Username:</span>{" "}
        {username}{" "}
      </p>
      <p>
        <span className="font-extrabold bg-gray-300 mt-10 ">Email:</span>{" "}
        {email}
      </p>
      <button
        className="bg-gray-500 mb-10  mt-10 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
        onClick={() => {
          dispatch(logOutPressed())
        }}
      >
        Log Out
      </button>
      <button
        className="bg-gray-500 mb-10 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </div>
  )
}
