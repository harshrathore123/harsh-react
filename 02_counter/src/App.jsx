

import './App.css'
import Counterrev from '../public/counterrev'


function App() {

  //Here data is variable and setData is method which is handle the data
  // This hook is used for changing the status
// let [data,setData] = useState(0);
// const addvalue=()=>{


//   //ONLY TILL 20
//     data = data + 1;
//     setData(data);
//     console.log(data);
    

// }

// const removevalue = () =>{

//   if(data<=0){
//     console.log("Can't take negative value");
//   }
//   else{
//     data = data-1;
//   setData(data);
//   console.log(data);
//   }
  
// }
//   return (
//     <>
//     <h1>Counter Value : {data}</h1>

//     <button onClick={addvalue}>Add Value</button>
//     <br /><br />
//     <button onClick={removevalue}>Remove Value</button>
//     </>
//   )
return(
  <>
  <Counterrev/>
</>
)
}

export default App
