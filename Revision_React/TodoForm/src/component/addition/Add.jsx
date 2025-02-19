import React from 'react'
import Del from '../deletion/del'
import { useState } from 'react'
import useDispatch from 'react-redux'
import { add } from '../../todoslice/todoslice'
function Add() {
    const[firstname,setFirstName] = useState("")
    const[secondname,setSecondName] = useState("")
   

  return (
    <>

    <form>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="first_name" 
                        value={firstname}
                        onChange={(e)=>setFirstName(e.target.value)}
                     
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>
                    <div>
                        <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="last_name" 
                         value={secondname}
                         onChange={(e)=>setSecondName(e.target.value)}
                     
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
<Del/>            
        

    </>
  )
}

export default Add