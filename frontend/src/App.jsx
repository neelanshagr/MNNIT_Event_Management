import Header from "./components/Header/Header"
import Login from "./components/Login/login"
import {Route, Routes} from 'react-router-dom'
import Register from './components/Register/Register'

function App() {
  
  return (
    <>
      <Header />

      <Routes>
        <Route path ='/' element ={<Login />} />
        <Route path ='/register' element ={<Register />} />

      </Routes>
    </>
  )
}

export default App
