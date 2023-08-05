import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Navbar from "./Componnets/Navbar"
import Football from "./pages/football"
import Basketball from "./pages/basketball"
import Cricket from "./pages/cricket"

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
