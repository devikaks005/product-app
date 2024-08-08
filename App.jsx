import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddProduct from './components/Addproduct'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/a" element={<AddProduct/>} />
      </Routes>
     
    </>
  )


export default App

    </>
  )
}

export default App
