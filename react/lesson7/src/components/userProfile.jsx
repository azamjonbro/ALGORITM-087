import React from 'react'

function userProfile({ userInfo }) {
 let { name, username, email, website, id, phone } = userInfo
 return (
  <div className='user-only'>
   <div className="modal-content">
    <div className="user-imgbox">
     <img src={`https://picsum.photos/id/${id-1}/250/250`} alt={name} loading='lazy' aria-label={name} title={name} style={{ borderRadius: "10px" }} />
    </div>
    <div className="user-content">
     <h2>{name}</h2>
     <p>{website}</p>
     <p>{username}</p>
     <a href={`tel:+${phone}`}>{phone}</a>
    </div>
   </div>
  </div>
 )
}

export default userProfile
