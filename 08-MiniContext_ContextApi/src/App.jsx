import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>React with Context-API</h1>
      {/* //Yaha ap jo bhi component lenge usme apko UserContextProvider ka access milega */}
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
