import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = ({showSignUp,setShowSignUp,showLogin,setShowLogin}) => {
  return (


    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-12"
            alt="Logo"
          />
        </Link>
        <div className="flex items-center lg:order-2">
    
                        <Link
                           onClick={()=>setShowLogin(!showLogin)}
                            
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Login
                        </Link>

                        <Link
                           onClick={()=>setShowSignUp(!showSignUp)}
                           className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            SignUp
                        </Link>

                        <Link
                           
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Recruiter
                        </Link>
                    </div>
        
        </div>
    </nav>

  )
}
