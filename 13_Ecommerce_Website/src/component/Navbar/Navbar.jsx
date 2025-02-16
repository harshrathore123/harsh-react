import React from 'react'
import Logo from "../../assets/logo.png"
import { IoMdSearch } from "react-icons/io";
import {FaCartShopping} from "react-icons/fa6"
import DarkMode from '../DarkMode/DarkMode';

const Menu = [
    {
        id:1,
        name:"Home",
        link:"/#"
    },
    {
        id:2,
        name:"Top Rated",
        link:"/#services"
    },
    {
        id:3,
        name:"Kids Wear",
        link:"/#"
    },
    {
        id:3,
        name:"Menu War",
        link:"/#"
    },
    {
        id:3,
        name:"Electronics",
        link:"/#"
    }
]; 

const DropDownLinks = [
    {
        id:1,
        name:"Trending Products",
        link:"/#"
    },
    {
        id:2,
        name:"Best Selling",
        link:"/#"
    },
    {
        id:3,
        name:"Top Rated",
        link:"/#"
    }
]
function Navbar() {
  return (
   <div className='shadow-md bg-white dark:bg-gray-900
   dark:text-white duration-200
   relative z-40'>

    {/* upper Navbar */}
    <div className='bg-primary/40 py-2'>
        <div className='container flex justify-between
        items-center'>
            <div>
                <a href="#"
                className='font-bold text-2xl sm:text-3xl flex
                gap-2'>
                    <img src={Logo} alt="Logo" 
                    className='w-10 uppercase'/>
                    Shopsy
                </a>
            </div>
            {/* Search Box */}  
            <div className='flex justify-between
            items-center gap-4'>
                <div className='relative group hidden
            sm:block'>
                    <input type="text" 
                    placeholder='Search'
                    className='w-[200px] sm:w-[200px]
                    group-hover:w-[300px]
                    transition-all duration-300 rounded-full
                    border border-gray-200 
                    px-2 py-1 focus:outline-none 
                    focus:border-1 focus:border-primary
                    '
                    />

                    <IoMdSearch
                    className='text-gray-500
                    absolute top-1/2
                    right-2 transform -translate-y-1/2
                    group:hover:text-primary
                    group-hover:text-primary
                    transition-all duration-300
                    '/>
                </div>
                {/* Order Button */}
            <button
            onClick={()=>alert("Ordering not available yet")}
            className='bg-gradient-to-r from-primary to-secondary
            transition-all duration-200 text-white px-3 py-1
            rounded-full flex items-center gap-3 group'>
                
                <span
                className='group-hover:block hidden
                transition-all duration-200'>
                    
                    Order</span>
            
                <FaCartShopping
                
                className='text-2xl
                transition-all duration-200
                text-white drop-shadow-sm cursor-pointer
                group-hover:text-primary'/>
            </button>

            {/* Darkmode Switch */}
            <div>
                <DarkMode/>
            </div>
            </div>
            
            
        </div>
    </div>
    {/* Lower Navbar */}
    <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center
        gap-4 '>
            {
                Menu.map((data)=>(
                    <li key={data.id}
                    className='px-4 py-2'>
                        <a href={data.link}
                        className='inline-block px-4 hover:text-primary
                        duration-200'>
                            {data.name}
                        </a>
                    </li>
                ))
            }

            {/*Simple Drop Down and Links*/}
            <li className='group-relative
            cursor-pointer'> 
                <a href="#"
                className='flex items-center gap-[2px]
                py-2'>
                    Trending Products
                    
                </a>

            </li>
        </ul>
    </div>

   </div> 
  )
}

export default Navbar