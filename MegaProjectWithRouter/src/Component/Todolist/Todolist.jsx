import React, { use, useState } from 'react'

function Todolist() {

    const [user, setUser] = useState("");
    const [arr, setArr] = useState([]);
    const [Editid, setEditId] = useState(null);

    const Add = () => {

        if (Editid != null) {
            arr.splice(Editid, 1, { user });
            setArr([...arr]);
            setEditId(null);
        }

        else {
            if(!user) return alert("Enter username");
            else if(user.length < 3) return alert("Please enter approx 3 character");
            else setArr([...arr, { user }])
        }


        setUser("");
    }

    const Delete = (index) => {
        arr.splice(index, 1);
        setArr([...arr]);
    }


    const Edit = (index) => {
        setEditId(index);
        setUser(arr[index].user);

    }
    return (
        <>

            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your Task</label>
                <input

                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    type="text"
                    id="success"
                    className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 
  placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 
  focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"/>

            </div>

            <div className="mb-6 align-center flex justify-center">
                <button onClick={Add} className='bg-green-50 border border-green-500 text-green-900 dark:text-green-400 
  placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 
  focus:border-green-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 '>Add</button>
            </div>

            <div className="relative overflow-x-auto ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Task
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((ele, index) => {
                            return (
                                <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" key={index}>
                                    <td scope="col" className="px-6 py-3">{index + 1}</td>
                                    <td scope="col" className="px-6 py-3">{ele.user}</td>
                                    <td scope="col" className="px-6 py-3 align-center flex justify-center">
                                        <button className='bg-green-50 border border-green-500 text-green-900 dark:text-green-400 
  placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 
  focus:border-green-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500' onClick={() => Delete(index)}>Del</button>
                                        &nbsp;
                                        &nbsp;
                                        &nbsp;
                                        <button className='bg-green-50 border border-green-500 text-green-900 dark:text-green-400 
  placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 
  focus:border-green-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500'onClick={() => Edit(index)}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Todolist