import { Login } from "features/user/Login"
import { LogOut } from "features/user/LogOut"
import { SignUp } from "features/user/SignUp"
import { Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "utils/PrivateRoutes"
import { Header } from "./components/Header"
import { HomePage } from "./pages/HomePage"

function App() {
  return (
    <div>
      <Header />
      <div className="md:max-w-6xl mx-auto mt-24  ">
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoutes>
                <HomePage />
              </PrivateRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/logout"
            element={
              <PrivateRoutes>
                <LogOut />
              </PrivateRoutes>
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
