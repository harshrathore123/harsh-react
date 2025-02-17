
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { dec, inc, incByAmount, reset } from './Features/Counter/counterSlice';
import { useState } from 'react';

function App() {

  const [input,setInput] = useState("");

  const dispatched = useDispatch();
  const count = useSelector((state)=>state.counter.Value);
  function increment(){
    dispatched(inc());
  }
  function decrement(){
    dispatched(dec());
  }

  function reinitialse(){
    dispatched(reset());
  }

  function incbyamount(){
    dispatched(incByAmount(input));
  }


  return (
     <div className='container'>
      <button onClick={increment}>+</button>
      <p>Count : {count} </p>
      <br />
      <button onClick={decrement}>-</button>
      <br /><br />
      <button onClick={reinitialse}>Reset</button>
     <br /><br />
      <input type="Number"
      value={input}
      onChange={(e)=>setInput(e.target.value)} />
     <br /><br />
      <button onClick={incbyamount}>Inc By Amount</button>
     </div>

  )
}

export default App
