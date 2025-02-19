import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste,updateToPaste } from '../../features/PasteSlice';

function Home() {
  const [title,setTitle] = useState('');
  const [value,setValue] = useState('');
  const [searchParams,setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");


  const dispatch = useDispatch();
  const allPastes = useSelector((state)=>
  state.pastes);

  
  useEffect(()=>{
    if(pasteId){
      const paste = allPastes.find((p) => p._id===pasteId)
      setTitle(paste.title);
      setValue(paste.content);
    }
  },[pasteId])

  function createPaste(){
    const paste={
      title:title,
      content:value,
      _id:pasteId||Date.now().toString(36),
      createdAt:new Date().toISOString(),
    }


    if(pasteId){
      //update
      dispatch(updateToPaste(paste))

    }
    else{
      //create
      dispatch(addToPaste(paste))
    }

    //after creation or updation
    setTitle("");
    setValue("");
    setSearchParams({});
  }
  
  return (
  <>
    <div className='flex flex-row gap-7 justify-evenly place-content-between'>
      <input 
      className='p-2 rounded-2xl mt-2 w-[66%] pl-5'
      type="text" 
      placeholder='Enter Title Here'
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />

      <button className='p-2 rounded-2xl mt-2'
      onClick={createPaste}>
        {
          //condition rendering
          pasteId ? "Update My Paste" : "Create My Paste"
        }
      </button>
    </div>

    <div className='mt-8'>
      <textarea 
      value={value}
      placeholder='Enter Content Here'
      onChange={(e)=>setValue(e.target.value)}
      rows={20}
      className='rounded 2xl mt-4 min-w-[500px] p-4'
      />
    </div>
  </>
  )
}

export default Home