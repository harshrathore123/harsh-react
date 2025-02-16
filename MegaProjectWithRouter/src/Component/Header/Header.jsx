import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react";
function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        // <header className="shadow sticky z-50 top-0">
        //     <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        //         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        //             <Link to="/" className="flex items-center">
        //                 <img
        //                     src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
        //                     className="mr-3 h-12"
        //                     alt="Logo"
        //                 />
        //             </Link>
        //             <div className="flex items-center lg:order-2">
        //                 <Link
        //                     to="#"
        //                     className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        //                 >
        //                     Log in
        //                 </Link>
        //                 <Link
        //                     to="#"
        //                     className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        //                 >
        //                     Get started
        //                 </Link>
        //             </div>
        //             <div
        //                 className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        //                 id="mobile-menu-2"
        //             >
        //                 <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        //                     <li>
        //                         <NavLink to="/"
        //                             className={({isActive}) =>
        //                                 `block py-2 pr-4 pl-3 duration-200
        //                                 ${isActive ? "text-green-700" : "text-blue-600"} 
        //                                 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
        //                                 lg:border-0 hover:text-orange-700 lg:p-0`
        //                             }
        //                         >
        //                             Home
        //                         </NavLink>
        //                     </li>


        //                     <li>
        //                         <NavLink to="/todolist"
        //                             className={({isActive}) =>
        //                                 `block py-2 pr-4 pl-3 duration-200
        //                                 ${isActive ? "text-green-700" : "text-blue-600"} 
        //                                 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
        //                                 lg:border-0 hover:text-orange-700 lg:p-0`
        //                             }
        //                         >
        //                             Todo-List
        //                         </NavLink>
        //                     </li>

        //                     <li>
        //                         <NavLink to="/crud"
        //                             className={({isActive}) =>
        //                                 `block py-2 pr-4 pl-3 duration-200
        //                                 ${isActive ? "text-green-700" : "text-blue-600"} 
        //                                 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
        //                                 lg:border-0 hover:text-orange-700 lg:p-0`
        //                             }
        //                         >
        //                             CRUD-Operation
        //                         </NavLink>
        //                     </li>

        //                     <li>
        //                         <NavLink to="/PassGenerate"
        //                             className={({isActive}) =>
        //                                 `block py-2 pr-4 pl-3 duration-200
        //                                 ${isActive ? "text-green-700" : "text-blue-600"} 
        //                                 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
        //                                 lg:border-0 hover:text-orange-700 lg:p-0`
        //                             }
        //                         >
        //                             Password-Generator
        //                         </NavLink>
        //                     </li>

        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </header>

        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo */}
                    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    {/* Mobile Menu Button */}
                    <button
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
          hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
          dark:focus:ring-gray-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 text-white">
                        <li>
                            <NavLink to="/"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200
                                    ${isActive ? "text-green-700" : "text-blue-600"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Home
                            </NavLink>
                        </li>


                        <li>
                            <NavLink to="/todolist"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200
                                    ${isActive ? "text-green-700" : "text-blue-600"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Todo-List
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/crud"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200
                                    ${isActive ? "text-green-700" : "text-blue-600"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                CRUD-Operation
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/PassGenerate"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200
                                    ${isActive ? "text-green-700" : "text-blue-600"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Password-Generator
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                        <li>
                            <NavLink to="/"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200
                                    ${isActive ? "text-green-700" : "text-blue-600"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                                onClick={()=> setIsOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/todolist"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200
                                    ${isActive ? "text-green-700" : "text-blue-600"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Todo-List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/crud"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200
                                    ${isActive ? "text-green-700" : "text-blue-600"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                CRUD-Operation
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/PassGenerate"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200
                                    ${isActive ? "text-green-700" : "text-blue-600"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Password-Generator
                            </NavLink>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );

}

export default Header