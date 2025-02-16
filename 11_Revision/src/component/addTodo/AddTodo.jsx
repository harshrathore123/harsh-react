import React, { useState } from 'react'
import { addTodo } from '../../features/Todo/Todo'
import {useDispatch} from 'react-redux' 
function AddTodo() {
  const [data,setData] = useState("");
  const dispatched = useDispatch();

  const addbtn = () =>{
   dispatched(addTodo(data));
   setData("");
   console.log(data);
   
  }
  return (
    <>
    <header className="shadow sticky z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="/" className="flex items-center">
                    <img
                        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                        className="mr-3 h-12"
                        alt="Logo"
                    />
                </a>
                <div className="flex items-center lg:order-2">
                    <a
                        href="#"
                        className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Log in
                    </a>
                    <a
                        href="#"
                        className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Get started
                    </a>
                </div>
                <div
                    className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="/"
                                className='block py-2 pr-4 pl-3 duration-200                                   
                                border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                lg:border-0 hover:text-orange-700 lg:p-0'
                            >
                                Home
                            </a>
                        </li>
                        
                        <li>
                            <a href="/AboutUs"
                                className='block py-2 pr-4 pl-3 duration-200                                   
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0'
                                
                            />
                                AboutUs
                        </li>

                        <li>
                            <a href="/ContactUs"
                               className='block py-2 pr-4 pl-3 duration-200                                   
                               border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                               lg:border-0 hover:text-orange-700 lg:p-0'
                            >
                                ContactUs
                            </a>
                        </li>

                        <li>
                            <a href="/github"
                                className='block py-2 pr-4 pl-3 duration-200                                   
                                border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                lg:border-0 hover:text-orange-700 lg:p-0'
                            >
                                Github
                            </a>
                        </li>
                        
                       
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div className='flex justify-center items-center h-screen w-full '>
        
<input 
type="text" 
id="helper-text" 
aria-describedby="helper-text-explanation" 
className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
placeholder="Task"
value={data}
onChange={(e)=>setData(e.target.value)}


/>

<button 
className='text-white bg-green-600 py-2 px-6 focus:outline-none 
hover:bg-indigo-600 rounded text-lg '
onClick={addbtn}>Add</button>

    </div>
    </>
  )
}

export default AddTodo