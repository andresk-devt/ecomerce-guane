<template>
  <div class="contenedor">
    <button class="btn btn-info">
        <router-link to="/admin/products">
            Back to  back
        </router-link>
    </button>
    <div class="row" v-if="product">
      <div class="col">
        <img :src="product.image" alt="Producto" />
      </div>
      <div class="col-8">
        <h2>{{product.name}}</h2>
        <h3>${{ product.price}}</h3>
        <input type="number" class="text-center col-1 mr-2 p-1" />
        <br />
        <button class="btn btn-primary">Add to cart</button>
        <p class="mt-4">
          {{product.description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  mounted(){
      this.$store.dispatch('getProduct', this.id);
  },
  computed: {
      product(){
          return this.$store.state.product;
      }
  }
};
</script>

<style lang="scss" scoped>
.contenedor button{
    margin: 20px;
    a{
        text-decoration: none;
        color: white;
    }
}
.row {
  width: 80%;
  margin: 50px auto;
  .col {
    width: 50%;
    img {
      width: 100%;
    }
  }
  button {
    margin-top: 20px;
  }
}
</style>