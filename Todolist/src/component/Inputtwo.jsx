import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';

export default function Inputtwo() {
      //for input we will take one usestate
      const [data,setData] = useState("");

      //for storing value in array take our usestate
      const [prearr,setCurrentArr] = useState([]);

      const [password,setPassword] = useState("");
      
  
      const add = () =>{
          // setData(data);
          // console.log(data);
  
          setCurrentArr([...prearr,{data,password}]);
          console.log(prearr);
  
          setData("")
          setPassword("");
          
      }
  
      const deleteUser = (index) =>{
          prearr.splice(index,1);
          setCurrentArr([...prearr]);
          console.log(prearr)
      }

      
      return (
          <>
  
  {/* NAVBAR CONTAINER */}
              <Navbar bg="primary" data-bs-theme="dark">
                  <Container>
                      <Navbar.Brand href="#home">Todolist</Navbar.Brand>
                  </Container>
              </Navbar>
  
  {/* INPUT-BOX CONTAINER */}
              <div className="container flex justify-content-center align-items-center w-full">
                  <div className="input-group mb-3 mt-5 h-auto align-items-center flex flex-wrap justify-content-center">
                      <input
                          type="text"
                          className="form-control text-center"
                          placeholder="Add Task"
                          value={data}
                          onChange={(e)=>{
                              setData(e.target.value)
                              // console.log(data)
                          }}
                      />
                      {/* <button className="btn btn-dark-primary bg-primary" 
                      type="button" 
                      id="button-addon2"
                      onClick={add}>
                         
                          Add
                      </button> */}
                  </div>

                  <div className="input-group mb-3 mt-5 h-auto align-items-center flex flex-wrap justify-content-center">
                      <input
                          type="text"
                          className="form-control text-center"
                          placeholder="Password"
                          value={password}
                          onChange={(e)=>{
                              setPassword(e.target.value)
                              // console.log(data)
                          }}
                      />
                     
                  </div>
                  <button 
                  className="btn btn-dark-primary bg-primary 
                  mx-auto w-full mt-5 h-auto align-items-center flex flex-wrap justify-content-center "  
                      type="button" 
                      id="button-addon2"
                      onClick={add}>
                         
                          Add
                      </button>
                  
  
                  
              </div>
  
  {/* TABLE CONTAINER */}
              <div className="container flex justify-content-center align-items-center w-full">
                  <table className="table table-dark table-striped table-hover mt-5 text-center w-full ">
                      <thead>
                          <tr>
                              <th scope="col">Id</th>
                              <th scope="col">Username</th>
                              <th scope='col'>Password</th>
                              <th scope="col">Action</th>
                          </tr>
                      </thead>
                      <tbody>
                         {/* Functioality of map to print the data into our webpage */}
                      
                  {prearr.map((val,index)=>(
                      <tr key={index}>
                          <td>{index+1}</td>
                          <td>{val.data}</td>
                          <td>{val.password}</td>
                          <td><button
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2 bg-primary"
                    onClick={() => editUser(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded bg-primary"
                    onClick={() => deleteUser(index)}
                  >
                    Delete
                  </button></td>
                      </tr>
                  ))} 
  
                      </tbody>
                  </table>
              </div>
  
          </>
      );
}
