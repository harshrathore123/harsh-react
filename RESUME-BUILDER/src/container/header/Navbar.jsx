import React from 'react'
import { NavLink, Link } from 'react-router-dom'
export const Navbar = () => {
  return (


    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-12"
            alt="Logo"
          />
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200
                                    ${isActive ? "text-blue-700" : "text-green-600"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200
                                    ${isActive ? "text-blue-700" : "text-green-600"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Login
              </NavLink>
            </li>

            <li>
              <NavLink to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200
                                    ${isActive ? "text-blue-700" : "text-green-600"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                SignUp
              </NavLink>
            </li>

            <li>
              <NavLink to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200
                                    ${isActive ? "text-blue-700" : "text-green-600"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Recruiter
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
