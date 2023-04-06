import React, {useState} from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { toast } from 'react-toastify';

export default function TopInputs(props) {

  const [inputValue, setInputValue] = useState('')

  function SearchClicked (e) {
    if (e.target.value.trim !== 0) // Does not trigger if no letters
    { 
      e.preventDefault() // Prevents page reload on submit
      props.setCity(inputValue)
    }
  }

  function tempClicked (e) {
    if (e.currentTarget.innerText === "°C")
    {
      props.setisMetric(true)
      toast.success('Converted to °C')
    } else if (e.currentTarget.innerText === "°F")
    {
      props.setisMetric(false)
      toast.success('Converted to °F')
    }
  }

  return (
    <div className='flex justify-between items-center'>
        <div className='flex self-start ml-16'>
          <form onSubmit={SearchClicked}>
            <input type='text' value={inputValue} placeholder='Search a city...' className='w-64 h-8' onChange={(e) => setInputValue(e.target.value)}></input>
            <button type='submit' onClick={SearchClicked}><UilSearch size={30} className="text-white cursor-pointer transition ease-out hover:scale-125 mx-1"/></button>
          </form>
          <UilLocationPoint size={30} className="text-white cursor-pointer transition ease-out hover:scale-125 mx-1"/>
        </div>
        <div className='flex self-end mr-16'>
            <button onClick={tempClicked}className='text-white text-lg'>°C</button>
            <p className='mx-2 text-white text-lg'> | </p>
            <button onClick={tempClicked} className='text-white text-lg'>°F</button>
        </div>
    </div>
  )
}
