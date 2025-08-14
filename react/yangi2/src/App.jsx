import React from 'react'
import Home from './Pages/Home/Home'

// router bu bizga qaysi sahifa ayni vaqtda oynaga  chiqishini nazorat qiladi.
// browser router bu bizga sahifalar o'rtasida o'tish imkonini beradi.
// path bu bitta component dan ikkinchhi componentga o'tkazishda ishlatamiz
// element qaysi componnetga o'tisshini kuo'rstaib beradi



function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login'  element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
