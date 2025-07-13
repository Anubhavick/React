import { useState } from "react";

function App() {

let[counter, setCounter] = useState(0)

const addValue = () => {
  console.log("clicked", counter);

if (counter == 20 ) {
  setCounter(counter + 0)
}  else {
  setCounter(counter + 1)
}

}

const removeValue = () => {
  console.log("clicked", counter);

if(counter >= 1){
  setCounter(counter - 1)
} else {
  setCounter(coutner - 0)
}

}

  return (
    <>
    <h1> hello anubhav </h1>
    <h2> Counter value: {counter}</h2>

    <button onClick={addValue}> Add value</button>
    <br/>
    <button onClick={removeValue}> Remove value</button>
    </>
    
  )
}


export default App
