import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ViewPaste() {

  const {id} = useParams();

  const allPastes = useSelector((state)=>state.pastes);

  const sppaste = allPastes.filter((p)=>p._id===id)[0];
  console.log(sppaste);
  return (
    <>
    <div className='flex flex-row gap-7 justify-evenly place-content-between'>
      <input 
      className='p-2 rounded-2xl mt-2 w-[66%] pl-5'
      type="text" 
      placeholder='Enter Title Here'
      value={sppaste.title}
      disabled
      onChange={(e)=>setTitle(e.target.value)}
      />
    </div>

    <div className='mt-8'>
      <textarea 
      value={sppaste.continue}
      placeholder='Enter Content Here'
      onChange={(e)=>setValue(e.target.value)}
      rows={20}
      disabled  
      className='rounded 2xl mt-4 min-w-[500px] p-4'
      />
    </div>
  </>
  )
}

export default ViewPaste