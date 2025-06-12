import { useState } from 'react'

function App({name}) {
  let [count,setCount] = useState("salom")
  console.log(count);
  const clickchangecount=()=>{
    setCount("alik")
  }
  return (
    <div>
      {count}
      <button onClick={clickchangecount}>Change</button>
    </div>
  )
}
export default App