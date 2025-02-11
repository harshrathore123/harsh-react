import React, { useContext } from "react";

export const ThemeContext = React.createContext({
    theme: "light",
    DarkTheme: () => {},
    LightTheme:() => {} 
});

export const ThemeProvider = ThemeContext.Provider


//Hooks Custom

export default function Theme(){
    return useContext(ThemeContext)
}