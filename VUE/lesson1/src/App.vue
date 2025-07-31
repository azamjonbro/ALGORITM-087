<template>
  <Helloikkinchi title="Nima gaplar okalar" :products="abubakrArray" />
</template>
<script>
import Helloikkinchi from "./components/Helloikkinchi.vue";
export default {
  components: {
    Helloikkinchi,
  },
  data() {
    return {
      abubakrArray: [],
    };
  },
  methods: {
    async getAllProducts() {
      fetch("https://fakestoreapi.com/products")
        .then((data) => data.json())
        .then((abubakr) => {
          console.log(abubakr);
          this.abubakrArray = abubakr;
        });
    },
  },
  mounted() {
    this.getAllProducts();
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
