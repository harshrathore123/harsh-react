import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteTodo } from '../features/Todo/TodoSlice'
function Todos() {
  
    const selecttodo = useSelector(state=>state.todos)
    const dispatch = useDispatch();

    return (
    <>
    <div>
        Todos
    </div>

{selecttodo.map((val)=>(
    <ul className='list-none'>
        <li key={val.id} 
        className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'>
            
            {/* <div className='text-white'>
                {val.id}
            </div> */}
            <div className='text-white'>
                {val.text}
            </div>

            <button
            onClick={()=>dispatch(deleteTodo(val.id))}
            className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none
            hover:bg-red-600 rounded text-md'
            >
              
            <button>
                Delete
            </button>

            </button>
        </li>
        </ul>   
    ))}

    
    </>
  )
}

export default Todos