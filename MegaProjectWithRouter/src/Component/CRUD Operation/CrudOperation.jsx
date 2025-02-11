import React, { useState } from 'react'

export default function CrudOperation() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmPass] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    const [Editid, setEditId] = useState(null);

    const [arr, setArr] = useState([]);


    const submit = (e) => {
        e.preventDefault();

        if(Editid!=null){
            arr.splice(Editid,1,{email,password,confirmpass,firstname,lastname,phone,city})
            setArr([...arr])
            setEditId(null);
        }

        else
        {
            setArr([...arr, { email, password, confirmpass, firstname, lastname, phone, city }])
        }

        

        setEmail("")
        setPassword("")
        setConfirmPass("")
        setFirstName("")
        setLastName("")
        setPhone("")
        setCity("")

    }

    const Delete = (index) => {
        arr.splice(index, 1)
        setArr([...arr])
    }

    const Edit = (index) => {
        setEditId(index);
        setEmail(arr[index].email);
        setPassword(arr[index].password);
        setConfirmPass(arr[index].confirmpass);
        setFirstName(arr[index].firstname);
        setLastName(arr[index].lastname);
        setPhone(arr[index].phone);
        setCity(arr[index].city);
    }

    return (
        <>
            <div className='w-full mx-auto p-4  flex  bg-gray-200'>

                <div className='w-full h-90 mx-auto p-4 bg-gray-700 justify-center align-center flex flex-col'>

                    <div className='flex shadow rounded-lg overflow-hidden mt-10 w-full'>
                        <form className="max-w-md mx-auto mt-10">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400  top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="password"
                                    value={confirmpass}
                                    onChange={(e) => setConfirmPass(e.target.value)}
                                    name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text"
                                        value={firstname}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text"
                                        value={lastname}
                                        onChange={(e) => setLastName(e.target.value)}
                                        name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                                </div>
                            </div>
                            <button type="submit"
                                onClick={submit}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="relative overflow-x-auto ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name_Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Password
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ConfirmPassword
                            </th>
                            <th scope="col" className="px-6 py-3">
                                FirstName
                            </th>
                            <th scope="col" className="px-6 py-3">
                                LastName
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                City
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action-Button
                            </th>


                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((ele, index) => {
                            return (
                                <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" key={index}>
                                    <td scope="col" className="px-6 py-3">{index + 1}</td>
                                    <td scope="col" className="px-6 py-3">{ele.email}</td>
                                    <td scope="col" className="px-6 py-3">{ele.password}</td>
                                    <td scope="col" className="px-6 py-3">{ele.confirmpass}</td>
                                    <td scope="col" className="px-6 py-3">{ele.firstname}</td>
                                    <td scope="col" className="px-6 py-3">{ele.lastname}</td>
                                    <td scope="col" className="px-6 py-3">{ele.phone}</td>
                                    <td scope="col" className="px-6 py-3">{ele.city}</td>



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
    );
}
