import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import Login from './pages/Login'
import Register from './pages/Register'
import ProducId from './pages/ProducId'
import ProtecterRouters from './pages/ProtecterRouters'
import NavBar from './components/share/NavBar'

function App() {

  return (
      <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/product/:id' element={<ProducId/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route element={<ProtecterRouters/>}>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/purchases' element={<Purchases/>}/>
          </Route>
        </Routes>
      </div>
  )
}

export default App
