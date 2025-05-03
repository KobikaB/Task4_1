import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
    <div className='fixed top-0 w-screen bg-gray-200 h-20  px-6 flex items-center justify-between  ' >
      
     <div className='flex m-2  gap-2 flex-shrink-0' >
        <img src="/Image/logo1.png" alt="i11" className='h-15 w-15  ' />
        <img src="/Image/logo2.png" alt="i2" className='h-10 w-15 mt-2' />

      </div>

      <div className='flex justify-end '>
      <div className="hidden md:flex ">

    <ul className='flex justify-center gap-4   '>
    
    
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/agri'>Agri</Link></li>
        <li><Link to='/aqua'>Aqua</Link></li>
        <li><Link to='/livestock'>Livestock</Link></li>
        <li><Link to='/poultry'>Poultry</Link></li>
        <li><Link to='/aboutus'>About us</Link></li>
        <li><Link to='/contactus'>Contact us</Link></li> 
        </ul>
        </div>
        
       <ul className='flex gap-2'>
        <li><Link to='/login' className=' rounded-xl m-4 px-3 py-2  hover:bg-gray-200 '>Login</Link></li>
        <li><Link to='/register' className='bg-blue-500 m-4 px-2 py-2 rounded-xl'>Register</Link></li>
        </ul>

        </div>

   
    </div>
    
  )
}

export default Header