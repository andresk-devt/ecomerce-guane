<template>
  <div>
      <div class="col mt-3">
        <div class="card  h-100 text-left">
          <img class="card-img-top w-100" :src="product.image" alt="">
          <div class="card-body">
            <h4 class="card-title">
              <router-link :to="{name: 'products', params: {id: product.id}}">
                {{product.name}}
              </router-link>
            </h4>
              <strong>${{product.price}}</strong>
              <p class="card-text">
                {{product.description}}
              </p>
          </div>
          <div class="px-4 pb-3">
            <button class="btn btn-secondary" @click="addToCart()">
              Add to cart
            </button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['product'],
    methods:{
        addToCart(){
            this.$store.dispatch('addProductToCart',{
                product: this.product,
                count: 1
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.card{
    max-width: 300px;
    min-width: 300px;
}
</style>