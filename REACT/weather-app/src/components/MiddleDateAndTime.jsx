import React from 'react'

export default function MiddleDateAndTime() {
  return (
    <div className='flex justify-center my-8'>
        <p className='text-white'>Weekday, Month Day Year</p>
        <div className='text-white mx-5'>|</div>
        <p className='text-white'>Local time: XX:XX XX</p>
    </div>
  )
}
