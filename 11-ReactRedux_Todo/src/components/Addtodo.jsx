import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/Todo/TodoSlice';
import Todos from './Todos';

function Addtodo() {
    const[input,setInput] = useState("");
    const dispatch = useDispatch()

    const addTodoHandler = (e) =>{
        e.preventDefault();
        dispatch(addTodo(input))
        console.log(input);
        setInput("")
    }
  return (
    <>
    <form className='space-x-3 mt-12 justify-center flex'>
        <input 
        type="text" 
        className='border border-gray-400 p-2 rounded'
        placeholder='Enter a Todo...'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />

        <button
        className='text-white bg-green-600 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded
        text-lg'
        onClick={addTodoHandler}
        >
            Add Todo
        </button>
    </form>
<Todos/>
    </>
  )
}

export default Addtodo