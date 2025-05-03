import React from 'react'
import { Link } from 'react-router-dom'
import image1 from  '../assets/Image/image1.jpeg'

const Home = () => {
  return (
   <div className=' '>
    <img src={image1} alt="i1" className='w-screen h-screen bg-cover  object-cover bg-center  '/>
    <div className="absolute top-1/2 flex  justify-center  ">
      <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center  '>  Where agricultural innovation meets community empowerment</h1>
      </div>
   </div>
  )
}
 
export default Home