import React from 'react'
import 'tachyons'

export default function ToDoListItem({content, id, func})
{
    return(
        <li id={id}>
            {content}
            <button onClick={() => func(id)} className='ml6'> Delete </button>
        </li>
    )
}