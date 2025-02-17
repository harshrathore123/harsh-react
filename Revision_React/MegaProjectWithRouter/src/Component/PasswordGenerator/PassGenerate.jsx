import React, { useCallback, useEffect, useRef, useState } from 'react'

function PassGenerate() {

    const [length,setLength] = useState(0);
    const [lowercase,setLowerCase] = useState(false);
    const [uppercase,setUppercase] = useState(false);
    const [number,setNumber] = useState(false);
    const [symbols,setSymbols] = useState(false);


    const [user,setUser] = useState("");

    const generatepass = useCallback(()=>{
        let pass = "";
        let str = "asdfghjkASDFGHJK"

        if(lowercase) str+="abcdefghijklmnopqrstuvwxyz"
        if(uppercase) str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(number) str+="0123456789"
        if(symbols) str+="!@#$%^&*()"

        for(let i=1;i<=length;i++)
        {
            let random = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(random)
        }

        setUser(pass);

    },[length,uppercase,lowercase,number,symbols,setUser])

    useEffect(()=>{
        generatepass()
    },[length,uppercase,lowercase,symbols,number])

    const ref = useRef(null);
//  const ref1 = useRef("");

    const generatecopy = () =>{
        // ref1.current?.select(user);
        window.navigator.clipboard.writeText(user).then(()=>{
            if(ref.current){
                ref.current.value = user;
            }
        })
        // ref.current?.select();

    }

    return (
        <div className='w-full mx-auto p-4  flex  bg-gray-200'>

            <div className='w-full h-90 mx-auto p-4 bg-gray-700 justify-center align-center flex flex-col'>

                <div className='flex shadow rounded-lg overflow-hidden mb-4 w-full'>
    
{/**Inputbox */}
                    <input type='text' placeholder='Password'
                        className="outline-none w-full py-1 px-3"
                        // ref={ref1}
                       value={user}
                       onChange={(e)=>setUser(e.target.value)}
                    />

{/**CopyBtn */}
                    <button className='outline-none bg-blue-500 text-white py-0.5 px-3 shrink-0'
                    onClick={generatecopy}>       
                        Generate Copy
                    </button>
                </div>

                <hr /><hr />
                <br />
                <div className='flex shadow rounded-lg overflow-hidden mb-4 w-full'>
    
{/**Inputbox */}
                    <input type='text' placeholder='For Pasting The Copy Part'
                        className="outline-none w-full py-1 px-3"
                        ref={ref}
                    />

                </div>

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
                        onChange={(e)=>setLength(e.target.value)}
                       />
                </div>

{/**LowerCase */}
                <div className="flex items-center gap-x-1">
                    <input type="checkbox"
                       value={lowercase}
                       onChange={(e)=>setLowerCase(!lowercase)}
                    />
                    <label>LowerCase</label>
                </div>

{/**UpperCase */}
                <div className="flex items-center gap-x-1">
                    <input type="checkbox"
value={uppercase}
onChange={(e)=>setUppercase(!uppercase)}
                    />
                    <label>UpperCase</label>
                </div>

{/**NumberCase */}
                <div className="flex items-center gap-x-1">
                    <input type="checkbox"
value={number}
onChange={(e)=>setNumber(!number)}
                    />
                    <label>Number</label>
                </div>
                
{/* Symbols */}
                <div className="flex items-center gap-x-1">
                    <input type="checkbox"
   value={symbols}
   onChange={(e)=>setSymbols(!symbols)}
                    />
                    <label>Symbols</label>
                </div>
            </div>
        </div>
    )
}

export default PassGenerate