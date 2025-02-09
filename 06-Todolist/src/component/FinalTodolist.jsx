import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';

export default function FinalTodolist() {

    //for input we will take one usestate
    const [data,setData] = useState("");

    //for storing value in array take our usestate
    const [prearr,setCurrentArr] = useState([]);
    

    const add = () =>{
        // setData(data);
        // console.log(data);

        setCurrentArr([...prearr,data]);
        console.log(prearr);

        setData("")
        
    }

    const Delete = (index) =>{
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
                    <button className="btn btn-dark-primary bg-primary" 
                    type="button" 
                    id="button-addon2"
                    onClick={add}>
                       
                        Add
                    </button>
                </div>

                
            </div>

{/* TABLE CONTAINER */}
            <div className="container flex justify-content-center align-items-center w-full">
                <table className="table table-dark table-striped table-hover mt-5 text-center w-full ">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Task</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {/* Functioality of map to print the data into our webpage */}
                    
                {prearr.map((val,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{val}</td>
                        <td><i className="bi bi-trash" onClick={()=>Delete(index)}></i></td>
                    </tr>
                ))} 

                    </tbody>
                </table>
            </div>

        </>
    );
}
