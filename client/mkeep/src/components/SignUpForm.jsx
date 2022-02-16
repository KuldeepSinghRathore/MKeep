import { signUpPressed } from "features/user/userSlice"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const SignUpForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { error, status } = useSelector((state) => state.users)
  const [signingUp, setSigningUp] = useState(false)
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  })
  const [confirmPass, setConfirmPass] = useState("")
  const handleChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signUpPressed(signUpData))
    navigate("/")
    // alert(JSON.stringify(signUpData))
  }
  useEffect(() => {
    if (status === "fulfilled") {
      setSigningUp(false)
    }
  }, [status])
  return (
    <div>
      <div className="main w-max m-auto mt-10">
        <h2 className="text-2xl mb-6">SignUp</h2>
        <form onSubmit={handleSubmit} autoComplete={"off"}>
          <div className="username flex border rounded text-gray-500 mb-4">
            <input
              className="outline-none px-4 h-full py-2 text-lg"
              type="text"
              placeholder="username"
              name="username"
              value={signUpData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="display_name flex border rounded text-gray-500 mb-4">
            <input
              className="outline-none px-4 h-full py-2 text-lg"
              type="email"
              placeholder="email"
              name="email"
              value={signUpData.email}
              onChange={handleChange}
              autoComplete={"off"}
              required
            />
          </div>
          <div className="password flex border rounded text-gray-500 mb-4">
            <input
              className="outline-none px-4 h-full py-2 text-lg"
              type="password"
              placeholder="password"
              name="password"
              value={signUpData.password}
              onChange={handleChange}
              required
              minLength="6"
              autoComplete="current-password"
            />
          </div>
          <div className="password flex border rounded text-gray-500 mb-4">
            <input
              className="outline-none px-4 h-full py-2 text-lg"
              type="password"
              placeholder="confirm password"
              onChange={(e) => setConfirmPass(e.target.value)}
              autoComplete={"off"}
            />
          </div>
          {error && (
            <div className="show_info text-sm mb-4 w-max text-red-400">
              {error}
            </div>
          )}
          {signUpData.password.length === confirmPass.length &&
            signUpData.password !== confirmPass && (
              <div className="show_info text-sm mb-4 w-max text-red-400">
                Password Does Not Match
              </div>
            )}
          <div className="">
            {signUpData.password === confirmPass ? (
              <input
                className="mb-4 h-full w-full  cursor-pointer rounded border bg-transparent bg-gray-800 px-2 py-2 text-lg text-white outline-none"
                type="submit"
                value={`${signingUp ? "SigningUp...." : "Sign Up"}`}
              />
            ) : (
              <button
                disabled={true}
                className="mb-4 h-full w-full  cursor-pointer rounded border bg-transparent  px-2 py-2 text-lg text-black shadow-sm outline-none"
              >
                SignUp
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
