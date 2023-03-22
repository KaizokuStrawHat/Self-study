import React from 'react'
import { UilClockSeven, UilSchedule } from '@iconscout/react-unicons'

export default function HourlyDailyForecast() {
  return (
    <div>
        <div className='mt-12'>
            <div className='flex justify-between'>
                <div className='grid grid-rows-3 grid-flow-column gap-5 place-items-center w-1/5 ml-2'>
                    <div>xx:xx</div>
                    <div><img src='https://o.remove.bg/downloads/4eb50bb4-76ed-487f-9f2e-85a0f8bcdb93/pngtree-sun-clipart-cartoon-cute-sun-simple-strokes-material-png-image_2389811-removebg-preview.png'></img>
                    </div>
                    <div>xx°</div>
                </div>
                <div className='grid grid-rows-3 grid-flow-column gap-5 place-items-center w-1/5'>
                    <div>xx:xx</div>
                    <div><img src='https://o.remove.bg/downloads/350ce415-842a-47f4-83cc-e8c546c3dc07/227-2277651_drawn-cloud-transparent-background-cloudy-clipart-black-and-white-removebg-preview.png'></img></div>
                    <div>xx°</div>
                </div>
                <div className='grid grid-rows-3 grid-flow-column gap-5 place-items-center w-1/5'>
                    <div>xx:xx</div>
                    <div>WEATHER</div>
                    <div>xx°</div>
                </div>
                <div className='grid grid-rows-3 grid-flow-column gap-5 place-items-center w-1/5'>
                    <div>xx:xx</div>
                    <div>WEATHER</div>
                    <div>xx°</div>
                </div>
                <div className='grid grid-rows-3 grid-flow-column gap-5 place-items-center w-1/5'>
                    <div>xx:xx</div>
                    <div>WEATHER</div>
                    <div>xx°</div>
                </div>
            </div>
            <div className='flex justify-center mx-4 my-8'>
                <UilClockSeven/>
                <p className='inline-block mx-2'>HOURLY</p>
            </div>
            <hr className='rounded-b-lg border-t-8 w-5/6 mx-auto'></hr>
        </div>
        <div className='mt-1'>
            <hr className='rounded-t-lg border-t-8 w-5/6 mx-auto'></hr>
            <div className='flex justify-center mx-4 my-8'>
                <UilSchedule/>
                <p className='inline-block mx-2'>DAILY</p>
            </div>
            <div className='flex justify-between'>
                <div className='grid grid-rows-3 grid-flow-column gap-5 place-items-center w-1/5 ml-2'>
                    <div>xx:xx</div>
                    <div>WEATHER</div>
                    <div>xx°</div>
                </div>
                <div className='grid grid-rows-3 grid-flow-column gap-5 place-items-center w-1/5'>
                    <div>xx:xx</div>
                    <div>WEATHER</div>
                    <div>xx°</div>
                </div>
                <div className='grid grid-rows-3 grid-flow-column gap-5 place-items-center w-1/5'>
                    <div>xx:xx</div>
                    <div>WEATHER</div>
                    <div>xx°</div>
                </div>
                <div className='grid grid-rows-3 grid-flow-column gap-5 place-items-center w-1/5'>
                    <div>xx:xx</div>
                    <div>WEATHER</div>
                    <div>xx°</div>
                </div>
                <div className='grid grid-rows-3 grid-flow-column gap-5 place-items-center w-1/5'>
                    <div>xx:xx</div>
                    <div>WEATHER</div>
                    <div>xx°</div>
                </div>
            </div>
        </div>
    </div>
  )
}
