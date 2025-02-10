import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

  const data = useLoaderData();
//   const [data,setData] = useState([]);

//  useEffect(()=>{
//   fetch("https://api.github.com/users/harshrathore123")
//   .then(res=>res.json())
//   .then(data=>setData(data))
//  })
  return (
    <div className='text-center text-2xl p-4 bg-green-600 text-white'>GithubFollower: {data.login}
    <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const LoaderGithubInfo =  ()=>{
  const res =  fetch("https://api.github.com/users/harshrathore123")
  return res.json();
}