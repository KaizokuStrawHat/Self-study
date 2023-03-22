      import React from 'react'
import { UilSchedule } from '@iconscout/react-unicons'

export default function BottomDailyForecast() {
  return (
    <div>
        <div className='flex ml-2'>
            <UilSchedule/>
            <p>DAILY FORECAST</p>
        </div>
        <hr></hr>
        <div className='grid grid-cols-5 grid-flow-row justify-between'>
          <div className='w-1/5 inline ml-2'>
            <div>DAY</div>
            <div>WEATHER</div>
            <div>TEMPERATURE</div>
          </div>
          <div className='w-1/5 inline'>
            <div>DAY</div>
            <div>WEATHER</div>
            <div>TEMPERATURE</div>
          </div>
          <div className='w-1/5 inline'>
            <div>DAY</div>
            <div>WEATHER</div>
            <div>TEMPERATURE</div>
          </div>
          <div className='w-1/5 inline'>
            <div>DAY</div>
            <div>WEATHER</div>
            <div>TEMPERATURE</div>
          </div>
          <div className='w-1/5 inline'>
            <div>DAY</div>
            <div>WEATHER</div>
            <div>TEMPERATURE</div>
          </div>
        </div>
    </div>
    
  )
}

// what if I just combine Daily and Hourly into one componentS