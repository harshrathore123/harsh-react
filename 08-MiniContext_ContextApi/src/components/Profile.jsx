//HOW TO ACCESS DATA HERE WE SEE THAT
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
function Profile() {

    const {data} = useContext(UserContext);

    if(!data) return <h1>Loading...</h1>
    
    return <h1>Welcome...{data.username}</h1>
}

export default Profile