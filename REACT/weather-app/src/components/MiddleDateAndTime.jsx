import React from 'react'

export default function MiddleDateAndTime({data}) {
  let DateData = new Date(data.localtime);  
  let weekdayString = DateData.toLocaleString('en-us', { weekday: 'long'}); 
  let monthString = DateData.toLocaleString('en-us', { month: 'long'}); 
  let dayString = DateData.toLocaleString('en-us', { day: 'numeric'});
  let yearString = DateData.toLocaleString('en-us', { year: 'numeric'});
  let timeString = data.currentLocaltime
  
  return (
    <div className='flex justify-center my-8'>
        <p className='text-white'>{`${weekdayString}, ${monthString} ${dayString} ${yearString}`}</p>
        <div className='text-white mx-5'>|</div>
        <p className='text-white'>{`Local time: ${timeString}`}</p>
    </div>
  )
}
