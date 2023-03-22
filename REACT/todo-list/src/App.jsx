import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoList from './ToDoList.jsx';
import "./App.css";
import 'tachyons';

export default function App(){

  const [todoList, setNewtodoList] = useState([])
  const [todo, setNewtodo] = useState({                   // todo is a placeholder for new inputs
    content: '',
    id: ''
  })

  function AddButtonClicked() {
    const newTodo = { ...todo, id: uuidv4() };
    setNewtodo(newTodo);
    setNewtodoList([...todoList, newTodo]);
    setNewtodo({
      content: '',
      id: ''
    });
  }

  function DeleteButtonClicked(id) {
    setNewtodoList(todoList.filter((obj) => obj.id !== id)) // button clicked value  
  }
  return(
    <div className='App'>
      <hr></hr>
      <p className='f1'>React.js Beginner Project - &#123; To Do &#125;</p>
      <hr></hr>
      <div className='mt5'>
        <input type='text' value={todo.content} onChange={(event) => setNewtodo({...todo, content:event.target.value})}/>
        <button className='pa10 ml4'onClick={AddButtonClicked}> Add </button>
      </div>
      <ToDoList list={todoList} func={DeleteButtonClicked} />
    </div>
  )
}