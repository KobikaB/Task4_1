import React from 'react'
import { Link } from 'react-router-dom'
import image1 from  '../assets/Image/image1.jpeg'

const Home = () => {
  return (
   <div className=' '>
    <img src={image1} alt="i1" className='w-screen h-screen bg-cover  object-cover bg-center bg-fixed '/>
    <div className="absolute top-1/2 ">
      <h1 className="text-white text-4xl  md:text-5xl lg:text-6xl font-bold text-center "> Where agricultural innovation meets community empowerment</h1>
      </div>
   </div>
  )
}
 
export default Home