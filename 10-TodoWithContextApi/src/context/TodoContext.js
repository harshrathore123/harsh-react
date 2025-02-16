import React from "react";
import { useContext } from "react";

export const TodoContext = React.createContext({
    //property in array

    TodoArr : [
        {
            id : 1,
            todo : "First Message",
            completed : false
        }
    ],

    //Functionality means method whichi is not define here only declare

    addTodo : (todo) =>{},
    updateTodo : (id,todo) =>{},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}

});

export default function UseTodo() {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;