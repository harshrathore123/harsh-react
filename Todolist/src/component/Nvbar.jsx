import Container from 'react-bootstrap/Container';
import { useState, useRef, use } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
function Nvbar() {


const [username, setUsername] = useState("");
    const [task, setTask] = useState([]);
    // const [editIndex, setEditIndex] = useState(null);
  
    const addUser = () => {
     
      // if (editIndex !== null) {
      //   const updatedUsers = [...users];
      //   updatedUsers[editIndex] = username;
      //   setUsers(updatedUsers);
      //   setEditIndex(null);
      // } else {
        setTask([...task, username]);
      // }
      setUsername("");
    };
  
    const deleteUser = (index) => {
      // setUsers(users.filter((_, i) => i !== index));
      task.splice(index,1);
      setTask([...task]);
      
    };
  
    const editUser = (index) => {
      // setUsername(users[index]);
      // setEditIndex(index);
    };
  
    // const editUser = (index) => {
    //   setUsername(users[index]);
    //   setEditIndex(index);
    // };
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button className="btn btn-dark-primary bg-primary" type="button" id="button-addon2"  onClick={addUser}>
            {/* {editIndex !== null ? "Update" : "Add"} */}
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
            {task.map((user, index) => (
              <tr key={index}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{user}</td>
                <td className="border p-2">
                  <button
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
                  </button>
                </td>
              </tr>
            ))}
  
            </tbody>
          </table>
        </div>
  
      </>
    );
}

export default Nvbar;