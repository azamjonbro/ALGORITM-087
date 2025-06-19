import { Route, Routes } from 'react-router-dom'
import Dashboard from './Views/Dashboard/Dashboard'
import Product from './Views/Products/Product'
import OneProduct from './Views/OneProduct/OneProduct'
import Header from './Components/Templates/Header/Header'
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/product/:id' element={<OneProduct/>} />
    </Routes>
    </>
  )
}

export default App
