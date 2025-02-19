import { useState } from 'react'
import './App.css'
import { inc } from './feature/counter/CounterSlice';
import { dec } from './feature/counter/CounterSlice';
import { incbyamount } from './feature/counter/CounterSlice';
import { reset } from './feature/counter/CounterSlice';
import {useSelector,useDispatch} from 'react-redux'
function App() {
  const[count,setCount] = useState(0);

  const selector = useSelector(state=>state.count);
  const dispatched = useDispatch();

  const resetbtn = () =>{
    dispatched(reset())
  }
  const increment = () =>{
    dispatched(inc())
  }

  const decrement=()=>{
    dispatched(dec())
  }

  const incamt=()=>{
    dispatched(incbyamount(count))
  }

  return (
   <>
   <div>This is Counter</div>

   <br /><br /><br /><br />

  <button onClick={increment}>+</button>
  <br />
  <p>count: {selector}</p>
  <br />
  <button onClick={decrement}>-</button>
  <br />
  <br /><br />
  
   <input type="number" 
   value={count}
   onChange={(e)=>setCount(e.target.value)}
   />
   <br />

   <button
   onClick={incamt}>incbyamount</button>
   <br /><br /><br />

   <button onClick={resetbtn}>Reset</button>
   </>
  )
}

export default App
