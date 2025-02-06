import { useState } from "react"

function App() {
  const [color,setColor] = useState("");

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>

   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-2 shadow-lg px-3 py-2 rounded-full" style={{backgroundColor:"white"}}>
      <button className="outline-none px-4  py-1 rounded-full text-white shadow-lg bg-red-600" onClick={()=>setColor("Red")}>Red</button>
      <button className="outline-none px-4  py-1 rounded-full text-white shadow-lg bg-green-600" onClick={()=>setColor("Green")}>Green</button>
      <button className="outline-none px-4  py-1 rounded-full text-white shadow-lg bg-blue-600 "onClick={()=>setColor("Blue")}>Blue</button>
      <button className="outline-none px-4  py-1 rounded-full text-white shadow-lg bg-gray-600 "onClick={()=>setColor("Gray")}>Gray</button>
      <button className="outline-none px-4  py-1 rounded-full text-white shadow-lg bg-yellow-600 "onClick={()=>setColor("Yellow")}>Yellow</button>
      <button className="outline-none px-4  py-1 rounded-full text-white shadow-lg bg-pink-600 "onClick={()=>setColor("Pink")}>Pink</button>
      <button className="outline-none px-4  py-1 rounded-full text-white shadow-lg bg-purple-600 "onClick={()=>setColor("Purple")}>Purple</button>      
      <button className="outline-none px-4  py-1 rounded-full text-black shadow-lg bg-white "onClick={()=>setColor("White")}>White</button>
      <button className="outline-none px-4  py-1 rounded-full text-white shadow-lg bg-black "onClick={()=>setColor("Black")}>Black</button>
      
      
      
      {/* <button className="bg-green-600">Green</button>
      <button className="bg-orange-600">Orange</button>
      <button className="bg-yellow-600">Yellow</button>
      <button className="bg-gray-600">Grey</button>
      <button className="bg-black">Black</button>
      <button className="bg-white">White</button> */}
    </div>
   </div>
   </div>
  )
}

export default App
