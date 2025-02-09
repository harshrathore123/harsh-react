import React from 'react'
import { useRef } from 'react';
import { useCallback } from 'react';
import { useState,useEffect } from 'react'

export default function DiffPassGen() {

    const [length,setLength] = useState(8);
    const [inputbox,setInputbox] = useState("");
    const [lowercase,setLowerCase] = useState(false);
    const [uppercase,setUpperCase] = useState(false);

    const [symbol,setSymbols] = useState(false);

    const [number,setNumber] = useState(false);
    
    const generator = useCallback(()=>{
        let store = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        
        if(lowercase) str+= "abcdefghijklmnopqrstuvwxyz";
        if(uppercase) str+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(number) str+= "0123456789";
        if(symbol) str+= "!@#$%^&*";

        for (let i = 1; i <= length; i++) {
            let random = Math.floor(Math.random() * str.length+1);
            store += str.charAt(random);
        }    
        setInputbox(store); 
    },[length,lowercase,uppercase,symbol,number,setInputbox])

    useEffect(()=>{
        generator();    
    },[length,lowercase,uppercase,symbol,number,generator])

    const copyclipboard = useCallback(()=>{
        window.navigator.clipboard.writeText(inputbox);
        selectref.current?.select();        

    })


    //Only for showing the copy value in inputbox we will use useRef hook

    const selectref = useRef(null);


    return (
        <div className='w-full max-w-md mx-auto p-4  flex mt-40 bg-black'>

            <div className='w-full max-w-md mx-auto p-4 bg-gray-700 justify-center align-center flex flex-col'>

                <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    
{/**Inputbox */}
                    <input type='text' placeholder='Password'
                        className="outline-none w-full py-1 px-3"
                        value={inputbox}
                        ref={selectref}
                       
                    />

{/**CopyBtn */}
                    <button className='outline-none bg-blue-500 text-white py-0.5 px-3 shrink-0'
                    onClick={copyclipboard}>
                        Generate Copy
                    </button>
                </div>

                <hr /><hr />
                <br />

                <label className='text-white'>PASSWORD LENGTH</label>

                <div>


{/**Length_InputBox */}
                    <input type='number' placeholder='Length'
                        className="outline-none w-full py-1 px-3"
                        value={length}
                    />

{/**RangeLength */}
                    <input className="w-full" type="range"
                       min={1}
                       max={100}
                       value={length}
                       onChange={(e) => setLength(e.target.value)}

                       />
                </div>

{/**LowerCase */}
                <div className="flex items-center gap-x-1">
                    <input type="checkbox"
                       value={lowercase}
                       onChange={()=>{
                           setLowerCase(!lowercase);
                       }}
                       
                    />
                    <label>LowerCase</label>
                </div>

{/**UpperCase */}
                <div className="flex items-center gap-x-1">
                    <input type="checkbox"
                       value={uppercase}
                       onChange={()=>{
                        setUpperCase(!uppercase);
                       }}
                    />
                    <label>UpperCase</label>
                </div>

{/**NumberCase */}
                <div className="flex items-center gap-x-1">
                    <input type="checkbox"
                       value={number}
                       onChange={()=>{
setNumber(!number)
                       }}
                    />
                    <label>Number</label>
                </div>
                
{/* Symbols */}
                <div className="flex items-center gap-x-1">
                    <input type="checkbox"
                  value={symbol}
                  onChange={()=>{
                    setSymbols(!symbol)
                  }}      
                    />
                    <label>Symbols</label>
                </div>
            </div>
        </div>
    )
}
