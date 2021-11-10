<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="information">
          <div class="company--info">
          <h3>Company name</h3>
          <span>N.I.T: 4320432 / <strong>ID ORDER: #234</strong></span>
          </div>
          <div class="client--info">
          <p>Name of client: Pepito perez</p>
          <p>Phone number: (302)54-32</p>
          </div>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID Producto</th>
              <th scope="col">nombre del producto</th>
              <th scope="col">cantidad</th>
              <th scope="col">precio x unidad</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="item in order" :key="item.product.id">
              <th scope="row">{{item.product.id}}</th>
              <td>{{item.product.name}}</td>
              <td>{{item.count}}</td>
              <td>{{item.product.price}}</td>
            </tr>
            <tr scope="row">
              <th colspan="4" style="text-align: end;"><strong>Total: ${{ carTotalPrice }}</strong></th>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(['carTotalPrice']),
    ...mapGetters(["order"]),
  },
};
</script>

<style lang="scss" scoped>
.card{
  @include adjust-content;
  .card-body{
    .information{
      display: flex;
      flex-direction: row;
      text-align: center;
      .company--info{
        width: 50%;
      }
      .client--info{
        width: 50%;
      }
    }
  }
  table{
    width: 70%;
    margin: auto;
  }
}
  
</style>