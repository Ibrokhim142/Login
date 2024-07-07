import './App.scss'
import { Routes, Route  } from 'react-router-dom'
import Home from './Routes/Home/Home'
import Auth from './Routes/Auth/Auth' 
import Admin from './Routes/Admin/Admin'
import Login from './Routes/Auth/Login/Login'
import Register from './Routes/Auth/Register/Register'
function App() {
  

  return (
    <>
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="a dmin" element={<Admin />}/>
          <Route path="auth" element={<Auth />}>
            <Route path='' element={<Login />}/>
            <Route path='register' element={<Register />}/>
          </Route>

      </Routes>



    </>
  )
}

export default App
