import React from 'react'
import { useParams } from 'react-router-dom'
function User() {

    // custoom hoook
    const {userid} = useParams();
  return (
    <div className='text-center text-2xl p-4 bg-green-600'>User: {userid}</div>
  )
}



export default User