import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext';
import { TodoForm, TodoItem } from './component';

function App() {

  const [todos,setTodos] = useState([]);

  const addTodo = (todo) =>{
    setTodos((prev)=> [...prev,{id:Date.now(),...todo}])
  }

  const editTodo = (id,todo) =>{
  setTodos((prev)=> prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) =>{
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
  }

  const toggleComplete = (id) =>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id? {...prevTodo,completed: !prevTodo.completed} : prevTodo))
  }

// The above logic is based on context todo logic 

// Now we will discuss local storage here

//Key point - Localstorage store values in the format of string that's why we are using json.parse to convert string to object

useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem("todos"))

  if(todos && todos.length>0){
    setTodos(todos)
  }

},[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    <TodoProvider value={{todos,addTodo,editTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}

                        {
                          todos.map((value)=>(
                            <div key={value.id} className='w-full'>
                                <TodoItem value={value}/>
                              </div>
                          ))
                        }
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
