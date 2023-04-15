import { React, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import 'tailwindcss/tailwind.css';
import TopButtons from './components/TopButtons';
import TopInputs from './components/TopInputs';
import MiddleDateAndTime from './components/MiddleDateAndTime';
import MiddlePlaceAndWeather from './components/MiddlePlaceAndWeather';
import HourlyForecast from './components/HourlyForecast';
import { getFormattedData} from './services/weatherService';

// To DO (top to bottom importance):

// has color from hot and cold temperature
// make smooth transition loop 
// has color from day and night

// geolocation 2:02:06 from https://www.youtube.com/watch?v=cWk5EKVxrgo&t=4465s&ab_channel=ProgrammingWithYash 
// toggle switch for temperature conversion
// hover on weather, displays condition name

// Integrate node.js:
// add charts and graphs

// compare your timezone to the timezone of other countries

// validating city name input -- fix searchbar validation -- may seem unfixable

export default function App() { 
  const [data, setData] = useState(null)
  const [city, setCity] = useState('Edmonton')
  const [isMetric, setisMetric] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setData(await getFormattedData('/forecast.json', city))
    }
    fetchData()
  }, [city])

  return(
    <div className='mx-auto max-w-screen-sm mt-4 py-5 h-fit
    bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400'>
        <TopButtons setCity={setCity} />
        <TopInputs setCity={setCity} setisMetric={setisMetric}/>                                                      
        { data && <div>
          <MiddleDateAndTime data={data}/>
          <MiddlePlaceAndWeather data={data} isMetric={isMetric}/> 
          <HourlyForecast data={data} isMetric={isMetric}/>   
        </div>
        }
        <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
    </div>
  );
}
