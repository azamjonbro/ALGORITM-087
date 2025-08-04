<template>
  <Helloikkinchi title="Nima gaplar okalar" :products="filteredProducts" />
  <input type="text" v-model="inputValue" @input="updateQuery" />
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
      inputValue: "",
    };
  },
  computed: {
  filteredProducts() {
    return this.abubakrArray.filter((item) => {
      
      const matchesInput = this.inputValue
        ? item.title.toLowerCase().includes(this.inputValue.toLowerCase())
        : true;
      return matchesPrice && matchesInput;
    });
  },
},
  watch: {
    abubakrArray(newValue, oldValue) {
      console.log("Old value:", oldValue);
      console.log("New value:", newValue);
    },
    '$route.query.inputValue': {
      handler(newVal) {
        console.log('Input value changed:', newVal);
      },
      immediate: true,
    },
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
    updateQuery() {
      this.$router.replace({
        query: {
          ...this.$route.query,
          inputValue: this.inputValue,
        },
      });
    },
  },
  mounted() {
    this.getAllProducts();
    if (this.$route && this.$route.query && this.$route.query.inputValue) {
      this.inputValue = this.$route.query.inputValue;
    }
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
