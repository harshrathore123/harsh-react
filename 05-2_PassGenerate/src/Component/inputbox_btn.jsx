import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'

export default function Inputbox_btn() {

    const [length, setLength] = useState(1);
    const [lowercase, setLowerCase] = useState(false)
    const [Uppercase, setUpperCase] = useState(false);
    const [Symbols, setSymbols] = useState(false);
    const [pass, setPass] = useState("");
    const [number, setNumber] = useState(false);


    const passwordgenerate = useCallback(() => {
        let passw = "";
        let str = "";


        // let lowercase = "abcdefghijklmnopqrstuvwxyz";
        // let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        // let number = "0123456789";
        // let Symbols = "!@#$%&";

        if (lowercase) str += "abcdefghijklmnopqrstuvwxyz";
        if (Uppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (Symbols) str += "!@#$%&";
        if (number) str += "0123456789";


        for (let i = 1; i <= length; i++) {

            //random selection

            let random = Math.floor(Math.random() * str.length + 1);

            passw += str.charAt(random);
        }

        setPass(passw);
    }, [length, lowercase, Uppercase, Symbols, setPass]);

    useEffect(() => {
        passwordgenerate();
    }, [length, lowercase, Uppercase, Symbols, passwordgenerate])

    // const copytoclip = () =>{
    //     window.navigator.clipboard.writeText(pass);
    //     passref.current?.select();

    // }

/*************  ✨ Codeium Command ⭐  *************/
    /**
     * Copies the generated password to the user's clipboard and logs it to the console
     */
/******  72e4207e-d7c3-489d-b6b9-3ba9cd6f1fc4  *******/
    const copytoclip = () => {
        window.navigator.clipboard.writeText(pass);
        window.console.log(pass);
        passref.current?.select();
    }

    const passref = useRef(null);

    return (
        <div className='w-full max-w-md mx-auto p-4  flex mt-40 bg-black'>

            <div className='w-full max-w-md mx-auto p-4 bg-gray-700 justify-center align-center flex flex-col'>

                <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    
{/**Inputbox */}
                    <input type='text' placeholder='Password'
                        className="outline-none w-full py-1 px-3"
                        value={pass}
                        ref={passref}
                        onChange={(e) => setPass(e.target.value)}

                    />

{/**CopyBtn */}
                    <button className='outline-none bg-blue-500 text-white py-0.5 px-3 shrink-0'

                        onClick={copytoclip}>Copy</button>
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
                        onChange={(e) => setLength(e.target.value)}
                        value={length} />
                </div>

{/**LowerCase */}
                <div className="flex items-center gap-x-1">
                    <input type="checkbox"
                        onChange={() => {
                            setLowerCase(!lowercase);
                        }}
                        value={lowercase}

                    />
                    <label>LowerCase</label>
                </div>

{/**UpperCase */}
                <div className="flex items-center gap-x-1">
                    <input type="checkbox"
                        onChange={() => {
                            setUpperCase(!Uppercase);
                        }}
                        value={Uppercase}
                    />
                    <label>UpperCase</label>
                </div>

{/**NumberCase */}
                <div className="flex items-center gap-x-1">
                    <input type="checkbox"
                        onChange={() => {
                            setNumber(!number);
                        }}
                        value={number}
                    />
                    <label>Number</label>
                </div>
                
{/* Symbols */}
                <div className="flex items-center gap-x-1">
                    <input type="checkbox"
                        onChange={() => {
                            setSymbols(!Symbols);
                        }}
                        value={Symbols}
                    />
                    <label>Symbols</label>
                </div>
            </div>
        </div>
    )
}
