<template>
  <div>
    <div v-for="(product, index) in products" :key="index">
      {{ product.name }}
    </div>
  </div>
</template>

<script>
import axios from "../utils/axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get("/products");
        this.products = res.data;
        console.log("Products loaded:", this.products);
      } catch (err) {
        console.error("Error loading products:", err);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
