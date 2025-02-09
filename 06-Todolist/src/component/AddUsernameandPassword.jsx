import React, { useState } from 'react';

function AddUsernaemandPassword() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [arr,setArra] = useState([]);

const add = () =>{
    setArra([...arr,{username,password}]);
    setUsername('');
    setPassword('');
    console.log(arr)
}
    return (
        <div className="container flex justify-content-center align-items-center w-full">
            <h1>Add Username and Password in Table</h1>

            <input 
                                type="text" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                placeholder="Enter username" 
                            />
            
            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="Enter password" 
                            />
       
        <button onClick={add}>Add</button>
          <table className="table table-dark table-striped table-hover mt-5 text-center w-full ">
            <thead>
              <tr>
                <th scope='col'>Id</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
            
              </tr>
            </thead>
            <tbody>
            
                {arr.map((val,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{val.username}</td>
                        <td>{val.password}</td>

                    </tr>
                ))}
           
  
            </tbody>
          </table>
        </div>
    );
}

export default AddUsernaemandPassword;