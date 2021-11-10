<template>
  <div
    class="dropdown-menu"
    aria-labelledby="triggerId"
    style="width: 320px; rigth: 0; left: auto"
  >
    <div v-for="item in cart" :key="item.product.id">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.product.name }}</strong>
          <br />
          {{ item.count }} x ${{ item.product.price }}
        </div>
        <div>
          <a
            href=""
            class="btn btn-secondary"
            v-on:click.prevent="removeProductFromCart(item.product)"
            >Remove</a
          >
        </div>
      </div>
    </div>
    <hr />
    <div class="px-2 d-flex justify-content-between">
      <span>Total: $ {{ carTotalPrice }}</span>
      <a href="" class="text text-danger" v-on:click.prevent="clearCatItems()"
        >Clear cart</a
      >
      <a href="" class="text text-info" v-on:click="loadLocalStorage()">Pagar</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["cart"]),
    ...mapGetters(["carTotalPrice"]),
  },
  methods: {
    ...mapActions(["removeProductFromCart"]),
    clearCatItems() {
      this.$store.dispatch("clearCatItems");
    },
  }
};
</script>

<style>
</style>