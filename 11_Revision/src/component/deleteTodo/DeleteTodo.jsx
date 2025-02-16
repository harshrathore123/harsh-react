import React from 'react'
import {deleteTodo} from '../../features/Todo/Todo'
import {useSelector,useDispatch} from 'react-redux'

function DeleteTodo() {
    const select = useSelector(state=>state.todos);
    const dispatched = useDispatch();
    
  return (
    <>
    <div>Todo</div>

    {select.map((val)=>(
        <ul className='list-none' key={val.id}>
            <li className='mt-4 flex justify-evenly items-center bg-zinc-800 px-4 py-2 rounded text-white'>    
                
                {val.text}
           

            <button
            onClick={()=>dispatched(deleteTodo(val.id))}
            className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none
            hover:bg-red-600 rounded text-md'
            >
              
            Delete
            </button>
        </li>
           
            </ul>   
        ))}
    </>
  )
}

export default DeleteTodo