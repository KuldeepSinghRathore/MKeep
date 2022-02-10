import { loginPressed } from "features/user/userSlice"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

export const LoginForm = () => {
  const { error, token } = useSelector((state) => state.users)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (loginData.password !== "" && loginData.email !== "") {
      dispatch(loginPressed(loginData))
    }
  }

  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [navigate, token])

  return (
    <div className="main w-max m-auto mt-10">
      <div className="">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl mb-6">Login</h2>
          <span className="mb-6">
            New user{" "}
            <Link to={"/signup"} className="font-bold">
              SignUp
            </Link>{" "}
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="username flex border rounded text-gray-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 mx-2 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>

            <input
              className="outline-none px-2 h-full py-2 text-lg"
              type="email"
              placeholder="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              autoComplete={"off"}
            />
          </div>

          <div className="password flex border rounded text-gray-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 mx-2 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
            <input
              className="outline-none px-2 h-full py-2 text-lg"
              type="password"
              placeholder="password"
              name="password"
              value={loginData.password}
              autoComplete={"off"}
              onChange={handleChange}
            />
          </div>

          <div className="show_info text-sm mb-4 w-max text-red-400">
            {error}
          </div>

          <div className="submit border rounded mb-4 bg-blue-600 text-white cursor-pointer">
            <div className="wrapper flex w-max mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                />
              </svg>
              <input
                className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent"
                type="submit"
                value="Login"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
