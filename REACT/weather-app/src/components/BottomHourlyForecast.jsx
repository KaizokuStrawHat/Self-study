import React from 'react'
import { UilClockSeven } from '@iconscout/react-unicons'

export default function BottomHourlyForecast() {
  return (
    <div className='flex my-4'>
        <UilClockSeven/>
        <p>HOURLY FORECAST</p>     
        <hr></hr>  
        <div className='grid grid-cols-5 grid-flow-row justify-between'>
          <div className='w-1/5 inline ml-2'>
            <div>HOUR</div>
            <div>WEATHER</div>
            <div>TEMPERATURE</div>
          </div>
          <div className='w-1/5 inline'>
            <div>HOUR</div>
            <div>WEATHER</div>
            <div>TEMPERATURE</div>
          </div>
          <div className='w-1/5 inline'>
            <div>HOUR</div>
            <div>WEATHER</div>
            <div>TEMPERATURE</div>
          </div>
          <div className='w-1/5 inline'>
            <div>HOUR</div>
            <div>WEATHER</div>
            <div>TEMPERATURE</div>
          </div>
          <div className='w-1/5 inline'>
            <div>HOUR</div>
            <div>WEATHER</div>
            <div>TEMPERATURE</div>
          </div>
        </div>
    </div> 
  )
}
