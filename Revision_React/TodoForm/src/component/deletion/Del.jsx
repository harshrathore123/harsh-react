import React from 'react'

function Del() {
  return (
   <>
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
        <tr>
                    <td className="border p-2">1</td>
                    <td className="border p-2">Harsh</td>
                    <td className="border p-2">12245</td>
                    <td className="border p-2">
                        <button>Edit</button>
                        <button >Delete</button>
                    </td>
                </tr>
        </tbody>
      </table>
    </div>

   </>
  )
}

export default Del;