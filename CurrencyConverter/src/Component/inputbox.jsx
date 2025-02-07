import React,{useId} from 'react'


function InputBox({

    //Here we will take those value which we want to change
    label,
    amount,
    onamountchange,
    oncurrencychange,
    currencyoption = [],
    selectcurrency = "inr",
    amountDisable = false,
    currencyDisable = false

}) {

    const amountId = useId();
    return (
        <div className='bg-white p-3 rounded-lg text-sm flex'>
            <div className="w-1/2">

                {/**Here we will taking label */}

                <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                {/**Here we will taking input for amount */}

                <input

                /**For binding the label and input we must to use id hook */
                    id='amountId'
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable} //here we will disable the input box becouse we dont we want to change the amount
                    value={amount}//jaha se hum amount lenge

                    //ab agr ye amount change hota hai to kya karu to onchange karu
                    onChange={(e) => onamountchange && onamountchange(Number(e.target.value))}

                //Humne number esliye lika kyunki agr nhi likte to value string format me ati jab ki hume pata hai
                //ki hume number chhaiye to hum number use kar skte hai esa

                //onamountchange &&esa esliye kar rahe hai kyunki agr kisi ne empty chod diya to crash ho jaega 
                //esliye hum empercent ka use kar rahe hai jo bolega ki agr ye avaiable hai to hum usse access karenge

                />
            </div>


            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectcurrency}
                    disabled={currencyDisable}
                    onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}

                //Yaha number nhi liya kyunki ye currency to string me hi hai
                >


                    {/* Here we will taking option for currency as loop
                    Jab bhi hum loop lagaenge ek json pr to key lena zarruri hai
                    performance lane ke liye loop ke andr key lena zarruri hai
                */}
                    {currencyoption.map((currency) => {
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    })}

                </select>
            </div>
        </div>
    );
}

export default InputBox;



//NOTE:- if we want to export only one file in main then we will make one index.js file and then export all component
//there.


//We will use useid hook for id uniquness in label and inputbox