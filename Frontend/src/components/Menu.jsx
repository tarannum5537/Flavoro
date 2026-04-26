import React from 'react'

const Menu = () => {
  return (
    <div className='flex gap-3 text-[14px] overflow-x-scroll lg:overflow-hidden scroll-smooth mt-16'>
      <button className='bg-emerald-600 text-white py-1 px-8 rounded active:scale-95'>All</button>
      <button className='bg-emerald-600 text-white py-1 px-8 rounded active:scale-95'>Launch</button>
      <button className='bg-emerald-600 text-white py-1 px-8 rounded active:scale-95'>Breakfast</button>
      <button className='bg-emerald-600 text-white py-1 px-8 rounded active:scale-95'>Snacks</button>
      
    </div>
  )
}

export default Menu
