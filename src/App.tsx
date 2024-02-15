import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { globalStyles } from "./styles/globalStyles"

globalStyles()

function App() {


  return (
    <>
      <Header />
      <main className="wrapper">
        <Home />
      </main>
    </>
  )
}

export default App
