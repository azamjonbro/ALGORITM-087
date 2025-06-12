import { useEffect, useState } from 'react'
import UserProfile from './components/userProfile'
import "./App.css"
function App() {
  const [data, setData] = useState([])
  const [visibleModal, setVisibleModal]=useState(false)
  const [oneUser, setOneUser] = useState({})
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((items)=>{
      setData(items)
    })
  },[])
  const getOneProfile=(id)=>{
    setVisibleModal(!visibleModal)
    fetch("https://jsonplaceholder.typicode.com/users/"+id)
    .then((res)=>res.json())
    .then((data)=>{
      setOneUser(data)
    })

  }
  
  return (
    <div className='container'>
      <div className="user-list">
        {
        data?.map((item,index)=>{
          return (
            <div key={index} className='user-item' onClick={()=>getOneProfile(item?.id)}>
              <div className="users-imgbox">
                <img src={`https://picsum.photos/id/${index}/320/320`} alt={item?.name} loading='lazy' aria-label={item?.name} title={item?.name} style={{borderRadius:"50%"}}/>
              </div>
              <h2>{item?.name}</h2>
              <p>{item?.username}</p>
              <a href={`tel:${item?.phone}`}>{item?.phone}</a>
              <p>{item?.email}</p>
            </div>
          ) 
          
        })
      }
      {
        !data.length?<p>Users not found</p>:''
      }
      </div>

       {visibleModal?<UserProfile userInfo={oneUser}/>:""}

    </div>
  )
}

export default App
