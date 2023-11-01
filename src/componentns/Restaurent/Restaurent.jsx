import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import { Link } from 'react-router-dom';
export default function About() {
  return (
    <>
       <Link to='/restaurent/pizza' className='me-5'> Pizza</Link>
            <Link to='/restaurent/salad' className='me-5'> Salad</Link>
            <Link to='/restaurent/onion'> Onion</Link>
    
    
    </>
  )
}
