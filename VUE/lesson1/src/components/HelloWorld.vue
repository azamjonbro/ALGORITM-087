<script setup>
import { ref, reactive,Static } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0) // bu prosto state malumot saqlab turuvcji
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <h1>{{count}}</h1>
    <button type="button" @click="count--">Remove</button>
    <button type="button" @click="count=0">Clear</button>
    <button type="button" @click="count++">Add</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
