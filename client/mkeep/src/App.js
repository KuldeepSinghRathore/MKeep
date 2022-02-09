import { LoginPage } from "pages/LoginPage"
import { RegisterPage } from "pages/RegisterPage"
import { Header } from "./components/Header"
import { HomePage } from "./pages/HomePage"

function App() {
  return (
    <div>
      <Header />
      <div className="md:max-w-6xl mx-auto mt-24  ">
        <HomePage />
        {/* <LoginPage /> */}
        {/* <RegisterPage /> */}
      </div>
    </div>
  )
}

export default App
