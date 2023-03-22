import React from 'react'
import ToDoListItem from './ToDoListItem.jsx'

export default function ToDoList({list, func}) // func because only App components can have state variables
{
    return(
        <ul>
            {list.map((obj) => 
                <ToDoListItem content={obj.content} id={obj.id} func={func} key={obj.id}/>
            )}
        </ul>
    )
}