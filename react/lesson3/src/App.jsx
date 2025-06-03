import { useState } from 'react'

function App() {
    let [qiymat, setQiymat] = useState(0)

    const counter = ()=>{
      setQiymat(qiymat+=1)
    }
    
  return (
    <div>
      <div >{qiymat}</div>
      {/* {} -> bunday qavs (scope) orasiga dynamic qiymatlarni yozish mumkin */}
      <button onClick={counter}>Add</button>
    </div>
  )
}

export default App