import React from 'react'
import {useDispatch} from 'react-redux';
import { login } from '../../feature/loginSlice';
import toast from 'react-hot-toast';


function SignUp() {

    const[email,setEmail] = React.useState("");
    const[password,setPassword] = React.useState("");
    const[confirmpassword,setConfirmPassword] = React.useState(""); 

    const dispatch = useDispatch();

    const paste = {
        user:email,
        pass:password,
        confirmpass:confirmpassword,
        createdAt:new Date().toISOString()
    }

    const handlesubmit = () =>{

        if(!email || !password || !confirmpassword) return toast.error("Fill the form");

        // else if(password !== confirmpassword) return toast.error("Password doesn't match");
        // else if(password.length < 3 || confirmpassword.length < 3) return toast.error("Password should be more than 3 characters");
        // else if(email.length < 3) return toast.error("Email should be more than 3 characters");
        // else if(email.length > 30) return toast.error("Email should be less than 30 characters");
        // else if(password.length > 30) return toast.error("Password should be less than 30 characters");
        // else if(confirmpassword.length > 30) return toast.error("Password should be less than 30 characters");
        // else if(!email.includes("@")) return toast("Email should be valid");
        // else if(!email.includes(".")) return toast.error("Email should be valid");
        // else if(!password.includes("@")) return toast("Password should be valid");
        // else if(password.includes(".")) return toast.error("Password should be valid");
        // else if(!confirmpassword.includes("@")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes(".")) return toast.error("Password should be valid");
        // else if(password.includes("#")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("#")) return toast.error("Password should be valid");
        // else if(password.includes("$")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("$")) return toast.error("Password should be valid");
        // else if(password.includes("%")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("%")) return toast.error("Password should be valid");
        // else if(password.includes("^")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("^")) return toast.error("Password should be valid");
        // else if(password.includes("&")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("&")) return toast.error("Password should be valid");
        // else if(password.includes("*")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("*")) return toast.error("Password should be valid");
        // else if(password.includes("!")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("!")) return toast.error("Password should be valid");
        // else if(password.includes("(")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("(")) return toast.error("Password should be valid");
        // else if(password.includes(")")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes(")")) return toast.error("Password should be valid");
        // else if(password.includes("-")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("-")) return toast.error("Password should be valid");
        // else if(password.includes("_")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("_")) return toast.error("Password should be valid");
        // else if(password.includes("+")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("+")) return toast.error("Password should be valid");
        // else if(password.includes("=")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("=")) return toast.error("Password should be valid");
        // else if(password.includes("/")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("/")) return toast.error("Password should be valid");
        // else if(password.includes("?")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("?")) return toast.error("Password should be valid");
        // else if(password.includes(">")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes(">")) return toast.error("Password should be valid");
        // else if(password.includes("<")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("<")) return toast.error("Password should be valid");
        // else if(password.includes(".")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes(".")) return toast.error("Password should be valid");
        // else if(password.includes(",")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes(",")) return toast.error("Password should be valid");
        // else if(password.includes(";")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes(";")) return toast.error("Password should be valid");
        // else if(password.includes(":")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes(":")) return toast.error("Password should be valid");
        // else if(password.includes("{")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("{")) return toast.error("Password should be valid");
        // else if(password.includes("}")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("}")) return toast.error("Password should be valid");
        // else if(password.includes("|")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("|")) return toast.error("Password should be valid");
        // else if(password.includes("[")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("[")) return toast.error("Password should be valid");
        // else if(password.includes("]")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("]")) return toast.error("Password should be valid");
        // else if(password.includes("@")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("@")) return toast.error("Password should be valid");
        // else if(password.includes("#")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("#")) return toast.error("Password should be valid");
        // else if(password.includes("%")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("%")) return toast.error("Password should be valid");
        // else if(password.includes("^")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("^")) return toast.error("Password should be valid");
        // else if(password.includes("~")) return toast.error("Password should be valid");
        // else if(confirmpassword.includes("~")) return toast.error("Password should be valid");
        // else if(password.includes("`")) return toast.error("Password should be valid");


        else{dispatch(login(paste));setEmail("");setPassword("");setConfirmPassword("");}
    }



  return (
    
  <div className="fixed top-[6%] left-[31%] p-8 rounded-lg shadow-lg shadow-black/20 w-[400px] h-auto text-center">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-[600px]">
      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input 
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      type="email" 
                      name="email" 
                      id="email" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
                      block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                      dark:focus:border-blue-500" 
                      placeholder="name@company.com" 
                      />
                  </div>

                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input 
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}

                      type="password" 
                      name="password" 
                      id="password" 
                      placeholder="••••••••" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full 
                      p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    />
                  </div>

                  <div>
                      <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input 
                      value={confirmpassword}
                      onChange={(e)=>setConfirmPassword(e.target.value)}
                      type="confirm-password" 
                      name="confirm-password" 
                      id="confirm-password" 
                      placeholder="••••••••" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                      focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                     />
                  </div>
                  
                <button 
                  type="submit" 
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg 
                  text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={handlesubmit}>
                    Create an account
                </button>

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
  </div>
  )
}

export default SignUp