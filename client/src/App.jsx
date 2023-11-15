
import './App.css'
import Singup from './components/SingUp/Singup'
import {Route,Routes} from 'react-router-dom'
import LoginToken from './components/Login/LoginToken'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import NewPassword from './components/recoverPassword/NewPassword';
import MissPass from './components/recoverPassword/MissPassword';
import PrivateRoute from './components/utils/PrivateRoute';
import { useSelector } from 'react-redux';




function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<Singup/>} />
        <Route path='/login/:token' element={<LoginToken/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<PrivateRoute>
          <Home/>
        </PrivateRoute>}/>
        <Route path='/newPassword/:idUser' element={<NewPassword/>} />
        <Route path='/missPassword' element={<MissPass/>} />
      </Routes>
    </>
  )
}

export default App
