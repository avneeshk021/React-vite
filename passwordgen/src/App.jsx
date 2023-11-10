import { useState, useCallback } from 'react'
import './App.css'

function App() {
const [length, setLength] = useState(8)
const [numberAllowed , setNumberAllowed] =useState(false);
const [charAllowed , setcharAllowed] =useState(false);
const [password , setPassword] =useState("")

const passwordGenerater = useCallback(()=>{
  let pass=""
let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "
if(numberAllowed)
str+="0123456789"
if(charAllowed)
str+="!@#$%&*"
for (let i=1; i<=Array.length; i++)
{
  let char = Math.random()* str.length+1
  pass=str.charAt(char)
}
setPassword(pass)
}, [length, numberAllowed , charAllowed, setPassword])
  return (
    <>
  
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center">
      <h1 className='text-white text-center'>Password Fetcher</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-5'>
        <input type="text"
        value={password}
        className='outline-none w-full py-3 px-4 mb-2'
        placeholder='Pasword'
        readOnly

         />
       
      </div>
     </div>
    
    </>
  )
}

export default App
