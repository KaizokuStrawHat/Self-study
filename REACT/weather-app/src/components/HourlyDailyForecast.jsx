import React from 'react'
import { UilClockSeven, UilSchedule } from '@iconscout/react-unicons'
import {v4 as uuidv4} from 'uuid';

export default function HourlyDailyForecast({data}) {
    
    let HourlyArray = data.HourlyForecast
    // let DailyArray = data.DailyForecast

  return (
    <div>
        <div className='mt-12'>
            <div className='flex justify-between'>
                { HourlyArray.map((item) => {
                    return (
                        <div className='grid grid-rows-3 grid-flow-column gap-5 place-items-center w-1/5 ml-2' key={uuidv4()}>
                            <div>{item.time}</div>
                            <div><img src={item.icon}></img>
                            </div>
                            <div>{`${item.temp_c}°`}</div>
                        </div>
                    )
                })}
            </div>
            <div className='flex justify-center mx-4 my-8'>
                <UilClockSeven/>
                <p className='inline-block mx-2'>HOURLY</p>
            </div>
        </div>
        {/* DIVIDER */}

        {/* <div className='mt-1'>
            <hr className='rounded-t-lg border-t-8 w-5/6 mx-auto'></hr>
            <div className='flex justify-center mx-4 my-8'>
                <UilSchedule/>
                <p className='inline-block mx-2'>DAILY</p>
            </div>
            <div className='flex justify-between'>
                { DailyArray.map((item) => {
                    return (
                        <div className='grid grid-rows-3 grid-flow-column gap-5 place-items-center w-1/5 ml-2' key={uuidv4()}>
                            <div>{item.date}</div>
                            <div><img src={item.icon}></img></div>
                            <div>{`${item.avgtemp_c}°`}</div>
                        </div>
                    )
                })}
            </div>
        </div> */
        
        // ^^ Removing due to weatherapi changing their free plan to only 3 days of forecast 
        // instead of 5 days of forecast
        }
        
    </div>
  )
}
