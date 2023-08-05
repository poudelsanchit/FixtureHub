import { Routes, Route } from "react-router-dom"
import Navbar from "./Componnets/Navbar"
import Football from "./pages/Football"
import Football from "./pages/Cricket"
import Football from "./pages/Basketball"


function App() {

  return (
    <>
      <Navbar />
      <Main />
      <Routes>
        <Route index element={<Football />} />
        <Route to='/basketball' element={<Basketball />} />
        <Route to='/cricket' element={<Cricket />} />

      </Routes>
    </>
  )
}

export default App
