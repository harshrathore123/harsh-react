//HOW TO SEND DATA HERE WE SEE THAT
import React from 'react'
import { useState,useContext } from 'react'

//Here useContext is hook
import UserContext from '../context/UserContext'

function Login() {

    const [username,setUsername] = useState(''); 
    const [password,setPassword] = useState('');

    const {setData} = useContext(UserContext);
    
    const handlesbtn = (e) =>{
        //default prevent kyu karte hai

        //By default value url ke through kahi chali jati hai ya fir post method ke through chali jati hai
        e.preventDefault();
        setData({username,password});
    }
  return (
    <>
    <div>
        <h2>Login</h2>
        <input type="text" value={username} placeholder='Username' 
        onChange={(e)=>setUsername(e.target.value)}/>
        <br></br>
        <input type="text" value={password} placeholder='password' 
        onChange={(e)=>setPassword(e.target.value)}/>
        <br></br>
        <button onClick={handlesbtn}>Submit</button>
    </div>
    </>
  )
}

export default Login