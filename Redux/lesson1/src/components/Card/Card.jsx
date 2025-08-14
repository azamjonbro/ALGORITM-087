import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import  {AddToCart} from "../../utils/CardSlice.js"
import "./Card.css"; // CSS faylimizni import qilamiz

const Card = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
 const addCart =(user)=>{
  dispatch(AddToCart(user))
  console.log("salom");
  
 }
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Yuklanmoqda...</p>;

  return (
    <div className="cards-container">
      {users.map((user) => (
        <div key={user.id} className="card" title={user.title}>
          <img src={user.image} width="200px" height="200px" alt={user.title}  />
          <h3>{user.title.slice(0,30)}...</h3>
          <p>{user.description.slice(0,40)}... more</p>
          <button onClick={()=>{addCart(user)}}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
