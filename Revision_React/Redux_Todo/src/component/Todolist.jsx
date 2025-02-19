import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add} from '../features/Slicetodo/TodoSlice';
import { del } from '../features/Slicetodo/TodoSlice';

export default function Todolist() {
    const [input,setInput] = useState("");
    const [lastinput,setLastInput] = useState("");

    const dispatched = useDispatch();
    const selector = useSelector(state=>state.todos)

    const submit = (e)=>{
e.preventDefault();
dispatched(add(input));
dispatched(add(lastinput));

setInput("");
setLastInput("");



    }
    return (
        <>
            {/* //For Add Task */}

            <form>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="first_name" 
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>
                    <div>
                        <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="last_name" 
                        value={lastinput}
                        onChange={(e)=>setLastInput(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                        
                    </div>

                </div>

                <div className='flex justify-center align-center '>
                    <button type="submit"
                    onClick={submit}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
    font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
    justify-center align-center flex dark:focus:ring-blue-800">Submit</button>
                </div>


            </form>

            {/* delete Task */}
        {selector.map((val)=>(
            <ul className='list-none'>
                    <li key={val.id} 
                    className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'>
            
                    {val.first}                               
                        
            
                        <button
                        onClick={()=>dispatched(del(val.id))}
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
