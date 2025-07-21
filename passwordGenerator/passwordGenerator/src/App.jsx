import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //here we are usign usecallback hook 
  const passwordGenerator = useCallback( ()=> {
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+[]{}"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

return (
  <>  
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-100'>
    <div className='classname="flex shadow rouded-lg overflow-hidden mb-4'>
      <input 
      type='text'
      value={password}
      className='outline-none w-full oy-1 px-3'
      placeholder='password'
      readOnly
      ></input>

<button
className='outline-none
Obg-blue-700 text-white рХ-3 ру-0.5 shrink-o'
>copy</button>

    </div>
    <div className='flex rext-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
  <input
  type='range'
  min={6}
  max={100}
  value={length}
  className='cursor-pointer'
  onChange={(e) => {setLength(e.target.value)}}
  />
  <label>Length: {length}</label>
</div>
<div className="flex items-center gap-x-1">
  <input
  type='checkbox'
  defaultChecked={numberAllowed}
  id='numberInput'
  onChange={() => {
    setNumberAllowed((prev) => !prev);
  }}
  />
  <label htmlFor='"numberInput'>Numbers</label>
</div>
<div className="flex items-center gap-x-1">
  <input
  type='checkbox'
  defaultChecked={charAllowed}
  id='numberInput'
  onChange={() => {
    setCharAllowed((prev) => !prev);
  }}
  />
  <label htmlFor='"characterInput'>Characters</label>
</div>
    </div>
  </div>
  </>

)
}

export default App
