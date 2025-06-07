import React, { useEffect, useState } from 'react'

function counter({name,counter}) {
 let [allData, setAllData]= useState([])
 // bu ikkinchi usul
 // let {name , counter} = props

 useEffect(()=>{
 fetch("https://fakeapi.net/products")
  .then((res)=> res.json())
  .then((data)=> setAllData(data.data) )
  .catch((err)=> console.log(err))
 },[])
 

 console.log(allData);
 
  return (
    <>
    <div style={{width:"100%",display:"flex",alignItems:"center"}}>
      {
       allData?.forEach((e)=>{
        console.log(e);
        return (
         <div>
          <h2>e.title</h2>
         </div>
        )
       })
      }
    </div>
    
    </>
  )
}
export default counter
