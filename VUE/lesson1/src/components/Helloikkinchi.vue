<template >
 <div>
  <!-- <img src="" alt="">  -->
  <!-- bu statik -->
  <!-- <img :src="img" :alt="title"> -->
  <!-- bu esa dynamic -->

  <div v-for="(data,index) in products" :key="index">
   <img :src="data.image" width="300" height="300" :aria-label="data.title" :alt="data.title">
  </div>
 </div>
</template>
<script>
export default {
 name:"",
 props:{
  title:{
   type:String,
   default:"nima kelishini bilmaganimdan yozib qoydim",  //-> null
   required:true,   
  },
  products:{
   type:Array,
   default:[]
  }
 },
 mounted(){

 },
 methods:{

 },
 watch(){

 },
 computed(){

 },
}
</script>
<style >
 
</style>


// vue js da code yozmoqchi bolsak ikki hil component turlaridan foydalanishimiz mumkin 
// 1- Optional API
// 2- Composition API -> buni farqlab olish uchun scripti bosh tagiga qarang u yerda setup deb yozib qoyilgan boladi.
