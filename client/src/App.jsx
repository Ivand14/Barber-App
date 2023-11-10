
import './App.css'
import Singup from './components/SingUp/Singup'
import {Route,Routes} from 'react-router-dom'
import LoginToken from './components/Login/LoginToken'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import NewPassword from './components/recoverPassword/NewPassword';
import MissPass from './components/recoverPassword/MissPassword';
import {useLocalStorage} from 'react-use'
import PrivateRoute from './components/utils/PrivateRoute';




function App() {

  const verified = localStorage.getItem('verified')
  return (
    <>
      <Routes>
        <Route path='/' element={<Singup/>} />
        <Route path='/login/:token' element={<LoginToken/>} />
        <Route path='/login' element={<Login/>} />
        <Route element={<PrivateRoute isAuthorized={verified}/>}>
          <Route path='/home' element={<Home/>} />
        </Route>
        <Route path='/newPassword/:idUser' element={<NewPassword/>} />
        <Route path='/missPassword' element={<MissPass/>} />
      </Routes>
    </>
  )
}

export default App
