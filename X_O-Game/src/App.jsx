import './App.css'

function App() {

  // Way of access from html in javascript

let boxes = document.querySelectorAll(".box");
let Reset = document.querySelector("#Reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#message");
let newbtn = document.querySelector("#btn");


// Let's take a variable which is giving us to start game with X OR O
let turnX = true;

// Taking array to winning condition

let winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,5],
    [2,4,6],
    [0,4,8],

];

// Taking event listerner with arrow function from foreach loop in array

boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        // console.log("Clicking");
        if(turnX === true)
        {
            box.innerText = "X";
            turnX = false;
        }
        else
        {
            box.innerText = "O";
            turnX = true;
        }

        box.disabled = true;

        checkWinner();

    });
});

// Identify the winner

const checkWinner = () =>
{
    for(let win of winner)
    {
        let pos1 = boxes[win[0]].innerText;
        let pos2 = boxes[win[1]].innerText;
        let pos3 = boxes[win[2]].innerText;

        // If Three boxes are properly incomplete so we will check

        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
};


const showWinner = (winner)=>
{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disable();
}


const reset = () =>
{
    turnX = true;
    enable();
    msgcontainer.classList.add("hide");

}


const disable = ()=>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enable=()=>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}


newbtn.addEventListener("click",reset);
Reset.addEventListener("click",reset);

  return (
    <>
      <div className="msg-container hide">
        <p id="message">Winner</p>

        <button id="btn">New Game</button>
    </div>
    <main>
    <div className="heading">
        <h1>TIC TAC GAME</h1>

    </div>

    <div className="container">
        <div className="mainBox">
            <button className="box"></button>
            <button className="box"></button>
            <button className="box"></button>
            <button className="box"></button>
            <button className="box"></button>
            <button className="box"></button>
            <button className="box"></button>
            <button className="box"></button>
            <button className="box"></button>
        </div>

       
    </div>
    <button id="Reset">Reset</button>
</main>
    </>
  )
}

export default App
