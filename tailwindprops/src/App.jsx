// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  // const [count, setCount] = useState(0)
  // let myObj={
  //   username : "Avii",
  //   age:20
  // }
  // let newArr=[1,2,3,4]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
<Card username="Avneesh" btnText="Click Me"/>
<Card username="Chai Aur React" btnText="Contac Me"/>
</>
  );
}

export default App
