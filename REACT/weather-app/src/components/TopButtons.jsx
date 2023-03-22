import React from 'react'
import cities from './cities.js'
import {v4 as uuidv4} from 'uuid';

export default function TopButtons() {
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) => {
            return(
                <button className="text-white text-lg font-medium" key={uuidv4()} id={city.id}>
                    {city.name}
                </button>
            )
        })}
    </div>
  )
}
