import Navbar from "./Componnets/Navbar"
import { Routes, Route } from "react-router-dom"
import Basketball from "./pages/basketball"
import Football from './pages/football'
import Cricket from "./pages/cricket"
import Main from "./pages/Main"

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
