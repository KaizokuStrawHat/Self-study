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

  useEffect(() => {
    async function fetchData() {
      setData(await getFormattedData('/current.json', 'Edmonton'))
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log(data);
  }, [data]);

  return(
    <div className='mx-auto max-w-screen-sm mt-4 py-5 h-fit
    bg-gradient-to-br from-cyan-700 to-blue-700 
    shadow-xl shadow-gray-400
     '>
        <TopButtons/>
        <TopInputs/>
        <MiddleDateAndTime/>
        <MiddlePlaceAndWeather/>
        <HourlyDailyForecast/>
    </div>
  );
}   