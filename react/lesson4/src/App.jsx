import React, { useState } from 'react'
import Counter from "./counter.jsx"

function App() {
  let [counter, setCounter] = useState(0)
  const addCounter = ()=>{
    setCounter(counter+=1)
    console.log(counter)
  }
  return (
    <div>
      <Counter name="Assalomu alaykum" counter={counter}/>
      <button onClick={addCounter}>Add</button>
    </div>
  )
}

export default App
