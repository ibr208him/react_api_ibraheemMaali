import Navbar from './componentns/Navbar/Navbar.jsx'
import Products from './componentns/Products/Products.jsx'
import Home from './componentns/Home/Home.jsx'
import Pizza from './componentns/Pizza/Pizza.jsx'
import Salad from './componentns/Salad/Salad.jsx'
import Onion from './componentns/Onion/Onion.jsx'
import {Routes,Route } from 'react-router-dom'
import Restaurent from './componentns/Restaurent/Restaurent.jsx'

import './App.css'

function App() {

  return (
    <>
     <Navbar/>
  
      <Routes>
      
         <Route path='/restaurent' element={<Restaurent/>}/>
         <Route path='/products' element={<Products/>}/>
         <Route path='/restaurent/pizza' element={<Pizza/>}/>
         <Route path='/restaurent/salad' element={<Salad/>}/>
         <Route path='/restaurent/Onion' element={<Onion/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/' element={<Home/>}/>
       </Routes>

 </>
  )
}

export default App
