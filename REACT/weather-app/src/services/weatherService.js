import { toast } from 'react-toastify';
const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "?key=349564cc6f5b4e67bbb202230231403"
const QUERY = "&q="
const DAYS_URL = '&days=6'

export async function getFormattedData(infoType, searchParam){
    console.log(BASE_URL + infoType + API_KEY + QUERY + searchParam + DAYS_URL)
    return await fetch(BASE_URL + infoType + API_KEY + QUERY + searchParam + DAYS_URL)
    .then(res => res.json())    
    .then(data => formatData(data))
    .catch(error => toast.error(error))
}

export function formatData(data)
{
    console.log(data, 'from weatherService')
    const { 
        location: {
            name, 
            localtime
        },
        current: {
            temp_c,
            condition : { text, icon }, 
            feelslike_c,
            humidity,           
            wind_kph
        },
        // Preparing the destructing -- getting the ingredient first
        forecast: { forecastday }
    } = data 

    // Deconstruct forecastday array, preparing the selection of desired properties
    const {  
        day: { maxtemp_c, mintemp_c},
        astro: { sunrise, sunset},
        hour
    } = forecastday[0] 

    // Current time and date
    const timeString = localtime.split(' ')[1]
    const hourInteger = parseInt(timeString.split(':')[0])

    // Converting military time to normal time, using for Current and Hourly
    let time = new Date();
    // Formatting for current local time
    time.setHours(hourInteger); 
    time.setMinutes(parseInt(timeString.split(':')[1])); 
    time.setSeconds(0);
    let currentLocaltime = time.toLocaleTimeString('en-us', { hour: 'numeric', minute: 'numeric', hour12: true});
    // Hourly Local time and Local date
    const HourlyForecast = []
    for(let hourPosition = Math.round(hourInteger), x = 0; x < 5; x++, hourPosition++)
    {
        // x = to display only 5 hours ahead, Current time + x
        if (hourPosition > 23) // Array only has limit of [0] to [23]
            hourPosition = 0
        time.setHours(hourPosition)
        

        // Converting military time to standard time & fetching desired properties:
        const {
            condition: {text, icon},
            temp_c
        } = hour[hourPosition]

        HourlyForecast.push(
            {
                time: time.toLocaleTimeString('en-us', { hour: 'numeric', hour12: true}), 
                text, 
                icon, 
                temp_c: Math.round(temp_c)
            });
    }

    // const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    // // Using an array placeholder to catch all the objects
    
    // const DailyForecast = 
    //     forecastday.slice(1).map((item) => {

    //         const {
    //             date,
    //             day: {
    //                 avgtemp_c,
    //                 condition: {
    //                     text, icon
    //                 }}
    //         } = item;

    //         /*
    //             This code apparently gives wrong weekday name,
    //             wrong by one day, Example: March 25 2023 is Friday -- but it is Saturday

    //             let dateObject = new Date(item.date);
    //             item.date = weekdays[dateObject.getDay()]; 
    //             console.log(item.date)
    //         */

    //         let dateObject = new Date(date);
    //         // Fixes the problem in expense of longer lines

    //         let dayNo = dateObject.getDay() + 1 
    //         // Ensures Sunday gets returned and not undefined
    //         if (dayNo > 6) 
    //         {
    //             dayNo = 0 
    //         }
    //         return { text, icon, date: weekdays[dayNo], avgtemp_c: Math.round(avgtemp_c) }
    //     })

    // ^^ Removing due to weatherapi changing their free plan to only 3 days of forecast 
    // instead of 5 days of forecast

    return ({ name, localtime, temp_c, text, feelslike_c, 
        humidity, wind_kph, maxtemp_c, mintemp_c, sunrise, sunset, currentLocaltime, icon, HourlyForecast})
}
