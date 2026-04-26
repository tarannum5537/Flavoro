import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
    const navigate = useNavigate()
  return (
    <div className='w-full h-screen bg-white flex items-center justify-center'>
        <button
              onClick={() => navigate(-1)}
            className="absolute z-20 top-30 lg:right-22 right-15 text-3xl lg:text-2xl"
          >
            ✕
          </button>
      <video className='lg:w-[20vw] w-[50vw]' src="/Success.webm" autoPlay loop></video>
    </div>
  )
}

export default Success
