import { Header } from "./components/Header"
import { HomePage } from "./pages/HomePage"

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto mt-24  ">
        <HomePage />
      </div>
    </div>
  )
}

export default App
