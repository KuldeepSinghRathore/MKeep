import React from "react"

export const Register = () => {
  return (
    <div>
      <div className="main w-max m-auto mt-10">
        <h2 className="text-2xl mb-6">Register</h2>
        <div className="display_name flex border rounded text-gray-500 mb-4">
          <input
            className="outline-none px-4 h-full py-2 text-lg"
            type="text"
            placeholder="display name"
          />
        </div>

        <div className="username flex border rounded text-gray-500 mb-4">
          <input
            className="outline-none px-4 h-full py-2 text-lg"
            type="text"
            placeholder="username"
          />
        </div>

        <div className="password flex border rounded text-gray-500 mb-4">
          <input
            className="outline-none px-4 h-full py-2 text-lg"
            type="password"
            placeholder="password"
          />
        </div>

        <div className="gender flex border rounded text-gray-500 mb-4">
          <div className="title m-2 ml-4">Gender</div>
          <label className="flex items-center cursor-pointer m-2">
            <input
              className="scale-125 mr-2 cursor-pointer"
              type="radio"
              name="gender"
              value="m"
              defaultChecked
            />
            <div className="title -mt-1">male</div>
          </label>

          <label className="flex items-center cursor-pointer m-2">
            <input
              className="scale-125 mr-2 cursor-pointer"
              type="radio"
              name="gender"
              value="f"
            />
            <div className="title -mt-1">female</div>
          </label>
        </div>
        <div className="show_info text-sm mb-4 w-max text-red-400">
          username already taken
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
            <input
              className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent"
              type="button"
              value="Register"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
