import React from 'react'
import { Link } from 'react-router-dom'
import image1 from  '../assets/Image/image1.jpeg'

const Home = () => {
  return (
   <div className=' '>
    <img src={image1} alt="i1" className='w-screen h-screen bg-cover  object-cover bg-center bg-fixed '/>
    <h1 className="absolute top-1/2  text-6xl text-center font-bold text-white  rounded-lg">
        Where agricultural innovation meets community empowerment
      </h1>
   </div>
  )
}
 
export default Home