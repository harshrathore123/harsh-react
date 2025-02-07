//Creating Custom Hooks for Currency Information

// It is the syntax of custom hooks
// function hello(){
//     return[];
// }

/**We will use built hook for making custom hook */

import {useState,useEffect} from "react";

function useCurrInfo(currency){
    //Now this hook is return some data

    //it is working the fetching api of currency

    //Here we will use empty object in usestate becouse if
    //"humare pas kuch nhi aata hai to humare pas ek empty object to aaega hi aaega"
    const [data,setData] = useState({});

    useEffect((currency)=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json)

        //Now for holidng the api data we must to declare use state becouse they can hold the data
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])

    //Here in dependency array is carry currency becouse we need to change the currency information 
    //when we change the currency

    //Now return the data becouse this hook is return the data
    return data;
}

//Now for accessing the setData we must to export the function and same working in a built hook

export default useCurrInfo;

//Here Custom hook is completed
//Finally made custom hook

//now we will discuss the how to make component reusable