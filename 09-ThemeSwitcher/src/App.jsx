
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContext, ThemeProvider } from './context/ThemeContext'
import Themebtn from './components/Themebtn';
import Card from './components/Card';

function App() {
const [theme,setTheme] = useState("light");

const LightTheme = () =>{
  setTheme("light");
}

const DarkTheme = () =>{
  setTheme("dark");
}


//actual change in a theme

useEffect(()=>{
  document.querySelector("html").classList.remove("dark","light");
  document.querySelector("html").classList.add(theme);

},[theme]);
  return (
    <ThemeProvider value={{theme,DarkTheme,LightTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* ThemeBtn */}
            <Themebtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card/>
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
