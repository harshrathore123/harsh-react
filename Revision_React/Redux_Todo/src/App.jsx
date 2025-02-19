import './App.css'
import Todolist from './component/Todolist'

function App() {

  return (
    <>
     <h1 className='text-center text-3xl bg-green-600 text-white rounded-lg w-full h-auto p-6 px-2 py-6'>This is Redux Todo</h1>

      <Todolist/>
    </>
  )
}

export default App
