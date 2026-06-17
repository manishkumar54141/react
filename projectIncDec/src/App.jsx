import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {

  let [counter,setCounter]=useState(15);

  const reactCreation=React.createElement(
  'h1',{},`incrementVal ${counter}`
  )
  
  const addValue=()=>{
    if(counter<20) setCounter(counter+1);
  }
  const decValue=()=>{
    if(counter>0) setCounter(counter-1);
  }
  return (
      <div>
       {reactCreation}
       <button onClick={addValue}>INCREASE VALUE</button>
       <br />
       <button onClick={decValue}>DECREASE VALUE</button>
       </div>
  )
}

export default App
