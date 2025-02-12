import React from 'react'
import image from "../assets/donations-1.jpg"

const HeroSection = () => {
  return (
    <div className=''>
      <div className='bg-cover bg-center h-screen'
      style={{ backgroundImage: `url(${image})`}}>
        <div className='text-white text-left flex justify-start p-10'>
          <div className='ml-10 mt-40'>
          <h1 className='text-4xl font-bold'>Building Trust, <br/>One Donation at a time</h1>
          <p className='text-lg text-white mt-5'>We are a dedicated organization that helps donors track their contributions,<br/> ensuring transparency and accountability.<br/> Our platform ensures that every donation reaches its intended cause <br/> and is used effectively to create real impact</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection