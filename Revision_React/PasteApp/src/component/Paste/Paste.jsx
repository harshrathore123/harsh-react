import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { useState } from 'react';
import { removeFromPastes } from '../../features/PasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
function Paste() {
  
  const pastes = useSelector(state=>
  state.pastes);
  console.log(pastes);

  const [searchvalue,setSearchValue] = useState('');

  const dispatch = useDispatch();

  //Now we want filter full content

  const filterData = pastes.filter((paste)=>
  paste.title.toLowerCase().includes(searchvalue.toLowerCase()));

  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
  }

  function handleCopy(paste){
navigator.clipboard.writeText(paste.content)
toast.success("copied to clipboard")
  }
  
  return (
    <>
    <input type="text" 
    className='p-2 rounded-2xl min-w-[600px] mt'
    placeholder='Search...'
    value={searchvalue}
    onChange={(e)=>setSearchValue(e.target.value)}
    />

    <div className='flex flex-col gap-5 mt-5'>

      {
        filterData.length>0 &&
       filterData.map((paste)=>
      {
        return(
          <div className='border' key={paste._id}>
            <div>
              {paste.title}
            </div>
            <div>
              {paste.content}
            </div>

            <div className='flex flex-row gap-4 place-content-evenly'>
              <button>
                <Link to={`/?pasteId=${paste?._id}`}>Edit</Link>
              </button>
              <button>
                <Link to= {`/pastes/${paste?._id}`}>View</Link>   
              </button>
              <button onClick={()=>handleDelete(paste._id)}>Delete</button>
              <button onClick={()=>handleCopy(paste)}>Copy</button>

              {/* //Logic Home Work */}
              <button>Share</button>
            </div>

            <div>
              {paste.createdAt}
            </div>
            </div>
        )
      })
      }

    </div>
    </>
  )
}

export default Paste