import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="register" element={ <Register/> } />
        <Route path="login" element={ <Login/> } />
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
