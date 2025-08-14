import './App.css'
import { useEffect, useState } from 'react'

function App() {
  let [products,setProducts] = useState([]);
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products")
    .then((res)=> res.json())
    .then((data)=>{
      setProducts(data)
    })
  },[])
  return (
    <div  className='cards'>
      {products.map((e, index) => {
        return <div className='card'>
        <img src={`https://picsum.photos/id/${index}/500/500`} alt="product img" />
          <h1>{e.title}</h1>
          <p>{e.description}</p>
          <b>{e.price} BTC</b>
          <br /><br />
        </div>
      })}
    </div>
  )
}

export default App
