import { useState,useCallback, useEffect, useRef } from "react"

function App() {
 const[length,setLength] = useState(8);
 const[numberallowed,setNumberAllowed] = useState(false);
 const[charallowed,setCharAllowed] = useState(false);
 const[inputpass,setInputPass] = useState("");

 const inputpassref = useRef(null);

 const copypasswordreftoclipboard = useCallback(()=>{
  //for optimising for reflecting the user that it is copy or not so
  //? this symbol is used becouse if value is null then so that's why
  inputpassref.current?.select();

  //this method is used when we want to copy much part only 
  inputpassref.current?.setSelectionRange(0,7);
  window.navigator.clipboard.writeText(inputpass);
 },[inputpass])

 const passwordgenerate = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if(numberallowed) str+= "0123456789";
  if(charallowed) str+= "!@#$%&";
  
  for (let i = 1; i <= length; i++) {
    let word = Math.floor(Math.random()*str.length+1);
    
    pass += str.charAt(word);

  }

  setInputPass(pass);

 },[length,numberallowed,charallowed,setInputPass])

 //use effect for calling the function of usecallback

 useEffect(()=>{
  passwordgenerate();
 },[length,numberallowed,charallowed,passwordgenerate]);
  return (
    <>
    <div className="w-full max-w-screen-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 text-center">
      <h1 className="text-center text-3xl my-8 text-white ">Password Generator</h1>
      
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={inputpass} className="outline-none w-full py-1 px-3" placeholder="password"
        readOnly ref={inputpassref} />
        <button 
        className="outline-none bg-blue-500 text-white py-0.5 px-3 shrink-0"
        onClick={copypasswordreftoclipboard}>Copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
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
          defaultChecked={numberallowed}
          onChange={()=>{
            setNumberAllowed((prev)=>!prev);
          }} />
          <label>Number</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={charallowed}
          onChange={()=>{
            setCharAllowed((prev)=>!prev);
          }} />
          <label>Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

//use status - we will use this becouse "Bar Bar kuch na kuch update ho raha hai esliye"
//use callback - becouse sabme same method hi lag rahi hai to ye use hota hai function ko re render karne ke liye
