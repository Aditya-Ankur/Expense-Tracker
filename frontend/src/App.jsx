import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'
import './App.css'
import Home from './pages/home'
import Form from './pages/form'
import Recent from './pages/recent'

function App() {

  return (
    <Router>
      <div className='app-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/form' element={<Form />} />
        <Route path='/recent' element={<Recent />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
