
import './App.css'
// src/components/PasswordGenerator.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { regenerate } from "./Features/PasswordSlice/PasswordSlice"


// function App() {

//   const [input,setInput] = useState("");
//   const[length,setLength] = useState(0);

//   const [number,setNumber] = useState(false);
//   const [char,setChar] = useState(false);


//   const generate = useCallback(()=>{
//     let password = "";
//     let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

//     if(number) str+= "0123456789";
//     if(char) str+= "!@#$%&";

//     for(let i=0;i<length;i++){
//       let random = Math.floor(Math.random()*str.length+1);
//       password += str.charAt(random);
//     }
//     setInput(password);

//   },[length,number,char,setInput])

//   useEffect(()=>{
//     generate();
//   },[length,char,number,generate])


//   return (
//    <>
//    <div className="w-full max-w-screen-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 text-center">
//     <h1 className="text-center text-3xl my-8 text-white ">Password Generator</h1>
    
//     <div className='flex shadow rounded-lg overflow-hidden mb-4"'>
//     <input 
//     type="text" 
//     value={input}
//     className="outline-none w-full py-1 px-3" 
//     placeholder="password"
   
//     readOnly 
   
//     />
//     <button 
//     className='outline-none 
//     bg-blue-500 
//     text-white 
//     py-0.5 
//     px-3 
//     shrink-0'
    
//   >
//         Copy
//     </button>
//     </div>

//     <div className='flex text-sm gap-x-2'>
//         <div className='flex items-center gap-x-1'>
//         <input type="range"
//           min={1}
//           max={100}
//           value={length}
//           className="cursor-pointer outline-none"
//           onChange={(e)=>setLength(e.target.value)}

//            />
//            <label>Length:{length}</label>

//         </div>

//         <div className="flex items-center gap-x-1">
//           <input type="checkbox"
//           value={number}
//           onChange={(e)=>setNumber(!number)}
          
//          />
//           <label>Number</label>
//         </div>

//         <div className="flex items-center gap-x-1">
//           <input type="checkbox"
//           value={char}
//           onChange={(e)=>setChar(!char)}

//           />
//           <label>Character</label>
//         </div>
//     </div>
//   </div>
//    </>
//   )
// }

function App(){
  const password1 = useSelector(state=>state.Val);
  const dispatch = useDispatch();
  const [length, setLength] = useState(1);

  return (
    <div className="password-generator">
      <h2>Password Generator</h2>
      <input
        type="number"
        min="6"
        max="32"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />
      <button onClick={() => dispatch(regenerate(length))}>Generate</button>
      <p>Password: <strong>{password1}</strong></p>
      
    </div>
  );
};

export default App
