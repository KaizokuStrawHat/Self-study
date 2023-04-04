import React from 'react'
import { UilWind, UilTemperature, UilTear, UilArrowUp, UilArrowDown, UilSun, UilSunset }  from '@iconscout/react-unicons'

export default function MiddlePlaceAndWeather({data}) {
    let place = data.name
    let weather = data.text;
    let temperature = Math.round(data.temp_c);
    let feelslike_c = Math.round(data.feelslike_c);
    let humidity = data.humidity;
    let wind = Math.round(data.wind_kph);
    let maxtemp_c = Math.round(data.maxtemp_c);
    let mintemp_c = Math.round(data.mintemp_c);
    let sunrise = data.sunrise;
    let sunset = data.sunset;

  return (
    <div className='grid-rows-4 justify-center'>
        <div className='flex justify-center'>
            <p className='text-white text-4xl'>{place}</p>
        </div>
        <div className='flex justify-center py-9'>
            <p className='text-blue-300 text-2xl'>{weather}</p>
        </div>
        <div className='flex justify-between items-center'>
            <img src={data.icon} className='w-1/4'></img>
            <p className='text-6xl w-1/3 text-center'>{temperature}°</p>
            <div className='grid-rows-3 w-1/3 text-right'> 
                <div className='flex'>
                    <UilTemperature/>
                    <p>Feels Like:
                        <span> {feelslike_c}°</span>
                    </p>
                </div>
                <div className='flex'>
                    <UilTear/>
                    <p>Humidity:
                        <span> {humidity}% </span>
                    </p>
                </div>
                <div className='flex'>
                    <UilWind/>  
                    <p>Wind: 
                        <span> {wind} km/h </span>
                    </p>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <UilSun/><p> Rise: <span>{sunrise}</span><span>|</span></p>
            <UilSunset/><p> Set: <span>{sunset}</span><span>|</span></p>
            <UilArrowUp/><p> High: <span>{maxtemp_c}°</span><span>|</span></p>
            <UilArrowDown/><p> Low: <span>{mintemp_c}°</span><span>|</span></p>
        </div>
    </div>
    )
}
