import React from 'react'
import { UilWind, UilTemperature, UilTear, UilArrowUp, UilArrowDown, UilSun, UilSunset }  from '@iconscout/react-unicons'

export default function MiddlePlaceAndWeather() {
  return (
    <div className='grid-rows-4 justify-center'>
        <div className='flex justify-center'>
            <p className='text-white text-4xl'> PLACE, PC </p>
        </div>
        <div className='flex justify-center py-9'>
            <p className='text-blue-300 text-2xl'>WEATHER</p>
        </div>
        <div className='flex justify-between items-center'>
            <img src='clear.png' className='w-1/3'></img>
            <p className='text-6xl w-1/3 text-center'>20°</p>
            <div className='grid-rows-3 w-1/3 text-right'> 
                <div className='flex'>
                    <UilTemperature/>
                    <p>Feels Like:
                        <span> xx</span>
                    </p>
                </div>
                <div className='flex'>
                    <UilTear/>
                    <p>Humidity:
                        <span> xx</span>
                    </p>
                </div>
                <div className='flex'>
                    <UilWind/>  
                    <p>Wind: 
                        <span> xx</span>
                    </p>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <UilSun/><p> Rise: <span>04:50 AM</span><span>|</span></p>
            <UilSunset/><p> Set: <span>09:17 PM</span><span>|</span></p>
            <UilArrowUp/><p> High: <span>21°</span><span>|</span></p>
            <UilArrowDown/><p> Low: <span>17°</span><span>|</span></p>
        </div>
    </div>
    )
}
