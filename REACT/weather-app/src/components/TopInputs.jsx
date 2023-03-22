import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

export default function TopInputs() {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex self-start ml-16'>
            <input type='text' placeholder='Search a city...' className='w-64 h-8   '></input>
            <UilSearch size={30} 
            className="text-white cursor-pointer transition ease-out hover:scale-125 mx-1"/>
            <UilLocationPoint size={30} 
            className="text-white cursor-pointer transition ease-out hover:scale-125 mx-1"/>
        </div>
        <div className='flex self-end mr-16'>
            <button className='text-white text-lg'>°C</button>
            <p className='mx-2 text-white text-lg'> | </p>
            <button className='text-white text-lg'>°F</button>
        </div>
    </div>
  )
}
