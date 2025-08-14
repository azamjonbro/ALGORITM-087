<template >
  <form class="form-container" @submit.prevent="Login">
    <h2 class="login">Login</h2>
    <input  type="text" v-model="formData.username" />
    <input type="password" v-model="formData.password" />
    <button class="btn-1" type="submit">Login</button>
  </form>
</template>
<script>

import axios from "../utils/axios"
export default {
  data() {
    return {
     formData:{
      username: "",
      password: "",

     },
    };
  },
  methods:{
   async Login() {
      try {
       await axios.post("/api/auth/login",this.formData)
       .then((data)=>{
        console.log(data);
        
       })
      } catch (error) {
       
      }
    }
  },
};
</script>

<style>
.form-container{
 display: flex ;
 flex-direction: column;
 width: 400px;
 height: auto;
 padding: 40px;
 background-color: grey;
 border-radius: 10px;
 gap: 15px;

}
h2{
 color: rgb(20, 55, 90);
}
button,input {
 outline: none;
 background: none;
 border: none;
} 

input{
  width: 100%;
  height: 20px;
  border-radius: 5px;
  background-color: beige;
  color: black;
  padding: 10px;

  
}

.btn-1{
background: linear-gradient(90deg,rgba(42, 123, 155, 1) 30%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 87%);
 color: black;
 margin-left: 20px;
}
</style>
