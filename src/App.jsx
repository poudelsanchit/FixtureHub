import { Routes, Route } from "react-router-dom"
import Navbar from "./Componnets/Navbar"
import Football from "./pages/Football"
import Cricket from "./pages/Cricket"
import BasketBall from "./pages/Basketball"
import Main from "./pages/Main"
import SingleStandings from "./pages/SingleStandings"
import { useState } from "react"
import BottomNavBar from "./Componnets/BottomNavBar"


function App() {
  const [isOpen,setIsOpen]= useState(false);


  return (
    <>
    <div className="dark:bg-dark-bg  bg-[#f1f2f4]">
    <Navbar setIsOpe={setIsOpen}/>
      <Main />
      <Routes>
        <Route index element={<Football />} />
        <Route path='/basketball' element={<BasketBall />} />
        <Route path='/cricket' element={<Cricket />} />
        <Route path='/football/:leagueid' element={<SingleStandings  isOpen={isOpen}/>} />
      </Routes>
      <BottomNavBar/>
    </div>
    </>
  )
}

export default App
