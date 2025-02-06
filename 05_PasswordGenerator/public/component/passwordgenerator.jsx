import React, { useEffect, useState,useCallback, useRef} from 'react'

export default function PasswordGenerator() {
  
    const[length,setLength] = useState(9);
    const[number,setNumber] = useState(false);
    const[char,setChar] = useState(false);

    const[input,setInput] = useState("");  

    const inputref = useRef("");
  
    const passwordgenerate = useCallback(()=>{
        let inp = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        //condition when number add
        if(number) str+= "0123456789";
        if(char) str+= "!@#$%&";

        for(let i=1;i<=length;i++)
        {
            let randomvalue = Math.round(Math.random()*str.length+1);
            
            inp += str.charAt(randomvalue);
        }

        setInput(inp);
    },[length,number,char,setInput]) 


    const copytoclipboard = useCallback(()=>{
        inputref.current?.select();
        // inputref.current?.setSelectionRange(0,7);
        window.navigator.clipboard.writeText(input);
    },[input])
        
    useEffect(()=>{
        passwordgenerate();
    },[length,number,char,passwordgenerate])


    return (
    <div className="w-full max-w-screen-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 text-center">
    <h1 className="text-center text-3xl my-8 text-white ">Password Generator</h1>
    
    <div className='flex shadow rounded-lg overflow-hidden mb-4"'>
    <input 
    type="text" 
    value={input} 
    className="outline-none w-full py-1 px-3" 
    placeholder="password"
    ref={inputref}
    readOnly 
   
    />
    <button 
    className='outline-none 
    bg-blue-500 
    text-white 
    py-0.5 
    px-3 
    shrink-0'
    
    onClick={copytoclipboard}>
        Copy
    </button>
    </div>

    <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer outline-none"
         onChange={(e)=>setLength(e.target.value)}

           />
           <label>Length:{length}</label>

        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={number}
          onChange={()=>{
            setNumber((prev)=>!prev);
          }}
         />
          <label>Number</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={char}
          onChange={()=>{
            setChar((prev)=>!prev);
          }}
          />
          <label>Character</label>
        </div>
    </div>
  </div>
  )
}
