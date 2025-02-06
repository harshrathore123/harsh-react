import React from 'react'
import { useState } from 'react';

export default function Counterrev() {
    const [previous,setPrevious] = useState(0);
    const add = ()=>{
  
      //Only add functionality work when setprevious == 20
  
      if(previous >= 20){
        console.log("Nothing we will entery after 20");
      }
      else{
        setPrevious(previous+1);
      }
  
    }
  
    const minus = () =>{
      if(previous <= 0){
        console.log("Can't take negative values");
      }
      else{
        setPrevious(previous-1);
      }
    }
    return (

        <>
        
          <h1>Counter : {previous}</h1>
    
          <button onClick={add}>Increment</button>
          <br /><br />
          <button onClick={minus}>Decrement</button>
        </>
      )
    }
