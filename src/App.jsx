import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Components/Homepage'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <Navbar></Navbar>
    {/* <Homepage></Homepage> */}
    <Outlet></Outlet>
    </>
  )
}

export default App
