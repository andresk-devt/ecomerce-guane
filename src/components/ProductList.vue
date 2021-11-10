<template>
  <div class="container__products">
    <product-card v-for="product in products" :key="product.id" :product="product"></product-card>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  computed: {
    products(){
      return this.$store.state.products;
    }
  }
};
</script>

<style lang="scss" scoped>
.container__products{
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 20px;
}
</style>