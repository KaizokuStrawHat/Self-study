import { React, useEffect, useState } from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import TopButtons from './components/TopButtons';
import TopInputs from './components/TopInputs';
import MiddleDateAndTime from './components/MiddleDateAndTime';
import MiddlePlaceAndWeather from './components/MiddlePlaceAndWeather';
import HourlyDailyForecast from './components/HourlyDailyForecast';
import { getFormattedData, formatData } from './services/weatherService';

export default function App() { 
  const [data, setData] = useState(null)
  const [city, setCity] = useState('Edmonton')

  useEffect(() => {
    async function fetchData() {
      setData(await getFormattedData('/forecast.json', city))
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log(data);
  }, [data])

  return(
    <div className='mx-auto max-w-screen-sm mt-4 py-5 h-fit
    bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400'>
        <TopButtons setCity={setCity}/>
        <TopInputs/>                                                      
        { data && <div>
          <MiddleDateAndTime data={data}/>
          <MiddlePlaceAndWeather data={data}/>
          <HourlyDailyForecast data={data}/>
        </div>
        }
    </div>
  );
}



  // What does data return? 
  // Put fetched data into components
  // Put button logic on Buttons -- Changes searchParam -- Changes
  // Put button logic on C and F temp -- Changes Temp for Current Daily and Weekly 
  // ?? Should I just convert C integers into F OR should I re-fetch data and only get fahrenheit

  // Put search button -- Enter key too
  // Put textbox logic -- resets placeholder -- Get textbox value, replace searchParam -- if value not valid



  // Modification ideas:
  // Hovering on hourly shows span of 5 hours
  // Clicking on hourly shows the rest of the remaining hours
  // Hovering on daily shows span of 5 days
  // Clicking on daily shows 14 days