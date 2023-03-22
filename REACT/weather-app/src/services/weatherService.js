const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "?key=349564cc6f5b4e67bbb202230231403"
const QUERY = "&q="

export async function getFormattedData(infoType, searchParam){
    return await fetch(BASE_URL + infoType + API_KEY + QUERY + searchParam)
    .then(res => res.json())    
    .then(data => formatData(data))
}

export function formatData(data)
{
    const { 
        location: {
            name, 
            region,
            localtime
        },
        current: {
            temp_c,
            condition : { text }, // returns text
            feelslike_c,
            humidity,           
            wind_kph
        },
        forecast: {
            //cut this entire block
                forecastday: {
                    day : { maxtemp_c, mintemp_c},
                    astro : { sunrise, sunset } 
                }
        }
    } = data

    // Preparing the destructing, getting the ingredient first
    const {
        forecast: { 
            forecastday
        }
    } = data 

    // Using an array placeholder to catch all the objects
    const ForecastData = [
        forecastday[0],
        forecastday.slice(1).map(({
            date,
            day: {
                avgtemp_c,
                condition: {
                    text
                }
            },
        }) => ({text, date, avgtemp_c}) )
    ]
    console.log({ name, region, localtime, temp_c, text, feelslike_c, 
        humidity, wind_kph, maxtemp_c, mintemp_c, sunrise, sunset, 
        ...ForecastData})
    return { name, region, localtime, temp_c, text, feelslike_c, 
        humidity, wind_kph, maxtemp_c, mintemp_c, sunrise, sunset, 
        ...ForecastData}
}
  
// How to know which day of the week it is just from the given date

// forecast => forecastday => [1][2][3][4][5] => hour => only show the upcoming times

/*

get data 
format that data by destructuring
get formatted data -- format it into current
get formatted data -- format it into hourly and daily
deconstruct current, hourly, and daily
return the deconstructed current hourly daily

*/