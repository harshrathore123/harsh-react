import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import { use } from 'react';
export default function RevTodo() {

    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [task, setTask] = useState([]);
    const [editindex,setEditIndex] = useState(null);

    const addtask = () =>{

        if(editindex !== null){
            task.splice(editindex,1,{username,password});
            setTask([...task]);
            setEditIndex(null);
        
        }

        else{

            if(username === '' || password === '') return alert('Fill the form');
            else if(username.length < 3 || password.length < 3) return alert('Username and Password should be more than 3 characters');
            else setTask([...task,{username,password}]);
        }
        
        setUsername('');
        setPassword('');
        
    }
    
    const Delete = (index) =>{
        task.splice(index,1);
        setTask([...task]);
    }


    const editUser = (index) =>{
        setEditIndex(index);
        setUsername(task[index].username);
        setPassword(task[index].password);

    }
  return (
    <>
  
    {/* NAVBAR CONTAINER */}
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Revision Todolist</Navbar.Brand>
      </Container>
    </Navbar>

    {/* INPUT-BOX CONTAINER */}
    <div className="container flex justify-content-center align-items-center w-full">
      <div className="input-group mb-3 mt-5 h-auto align-items-center flex flex-wrap justify-content-center">
        <input
          type="text"
          className="form-control text-center"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
      </div>
      <div className="input-group mb-3 mt-5 h-auto align-items-center flex flex-wrap justify-content-center">
        <input
          type="password"
          className="form-control text-center"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
      </div>
      <div className="input-group mb-3 mt-5 h-auto align-items-center flex flex-wrap justify-content-center">
      <button className="btn btn-dark-primary bg-primary" type="button" id="button-addon2"
        
        onClick={addtask}>
        
        Add
        </button>
        </div>
    </div>

    {/* TABLE CONTAINER */}
   
  </>
  )
}
 <div className="container flex justify-content-center align-items-center w-full">
      <table className="table table-dark table-striped table-hover mt-5 text-center w-full ">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {
            task.map((user,index)=>(
                <tr key={index}>
                    <td className="border p-2">{index+1}</td>
                    <td className="border p-2">{user.username}</td>
                    <td className="border p-2">{user.password}</td>
                    <td className="border p-2">
                        <button onClick={()=>editUser(index)}>Edit</button>
                        <button onClick={()=>Delete(index)}>Delete</button>
                    </td>
                </tr>
            ))
        }

        </tbody>
      </table>
    </div>
