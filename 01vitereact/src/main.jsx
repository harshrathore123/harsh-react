import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function myapp(){

    return(
        <>
        <h1>Hi i am harsh</h1>
    </>

    )

}

const reactelement = {
    type: "a",
    props: {
        href: "https://gmail.com",
        alt: "gmail"
    },
    Children: "Gmail is used for communication"
}

const a = (
    <a href='www.google.com' alt="www.google.com">
        Visit Google
    </a>
)



createRoot(document.getElementById('root')).render(
//    myapp()
   a
)
