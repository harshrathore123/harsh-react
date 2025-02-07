import { useState } from "react"
import { InputBox } from "./Component"
import useCurrInfo from "./customhooks/useCurrInfo"

function App() {

  //state for amount
  const [amount,setAmount] = useState(0);

  //now for converting the amount we must to take from to
  const [from,setFrom] = useState("usd"); 
  const [to,setTo] = useState("inr"); 
  const [convertedAmount,setConvertedAmount] = useState(0); 

  //Now we will using our custom hook and passing the value jaha se hume amoount chhaiye
  //jo ki chhaiye from se 

  const currInfo = useCurrInfo(from);

  //now we want to find the all key of our currInfo

  const option = Object.keys(currInfo);


  //now swap functionality 
  const swap = () =>{

    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(setConvertedAmount);
  }

  //now the convert button functionality

  const convert = () =>{
    
    setConvertedAmount(amount*currInfo[to]); 
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/30469688/pexels-photo-30469688/free-photo-of-elegant-fine-dining-plated-gourmet-dishes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
  
          }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            onamountchange={(amount) => setAmount(amount)}
                            currencyoption={option}
                            oncurrencychange={(currency)=>setAmount(amount)}
                            selectcurrency={from}
                           
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyoption={option}
                            onamountchange={(currency) => setTo(convertedAmount)}
                            selectcurrency={from}
                            amountDisable
                                                    />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
