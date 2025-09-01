import { useState } from 'react'

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './layout/Sidebar';
import Homen from './pages/Home'
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return(
    <Router>
    <div className='d-flex'>
      <Sidebar></Sidebar>
      <div className='p-4 flex-grow-1'>
        <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/About' element={<About/>}/>



        </Routes>
      
    </div>
    </div>
    </Router>
  )
}

export default App
