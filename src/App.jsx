import { Routes, Route } from "react-router-dom"
import Navbar from "./Componnets/Navbar"
import Football from "./pages/Football"
import Cricket from "./pages/Cricket"
import BasketBall from "./pages/Basketball"
import Main from "./pages/Main"


function App() {

  return (
    <>
      <Navbar />
      <Main />
      <Routes>
        <Route index element={<Football />} />
        <Route path='/basketball' element={<BasketBall />} />
        <Route path='/cricket' element={<Cricket />} />

      </Routes>
    </>
  )
}

export default App
