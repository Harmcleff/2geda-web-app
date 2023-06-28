import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Register from './register/Register';
import Home from './home/Home';
import Login from './login/Login';



function App() {
  

  return (
    <>
      <Login/>
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
