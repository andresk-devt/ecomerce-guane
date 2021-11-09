<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container">
        <div class="nav navbar-nav">
            <router-link to="/admin">
                <h2>Dashboard</h2>
            </router-link>
        </div>
        <div>
          <div class="dropdown open">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              0 Cart
            </button>
            <div @click="$event.stopPropagation();">
                <mini-cart></mini-cart>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main class="page-content">
        <aside class="lateral-content bg-light">
            <ul class="list-content__items">    
                <li class="itmes--list bg-secondary">
                    <router-link to="/admin/profile">
                        PROFILE
                    </router-link>
                </li>
                <li class="itmes--list bg-secondary">
                    <router-link to="/admin/products">
                        PRODUCTS
                    </router-link>
                </li>
                <li class="itmes--list bg-secondary">
                    <router-link to="/admin/orders">
                        ORDERS
                    </router-link>
                </li>
            </ul>
        </aside>
        <article class="content">
            <router-view></router-view>
        </article>
    </main>
  </div>
</template>

<script>
import MiniCart from '../components/MiniCart.vue';

export default {
    components: { MiniCart }
};
</script>

<style lang="scss" scoped>
.container{
    a{
        text-decoration: none;
        color: black;
    }
}
.page-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    aside{
        height: 93vh;
        width: 20%;
        ul{
            margin: 20px auto;
            padding: 0;
            list-style: none;
            :nth-child(2){
                border-top: 1px solid white;
            }
            :nth-child(3){
                border-top: 1px solid white;
            }
            li{
                padding: 20px;
                width: 70%;
                margin: auto;
                
                a{
                    color: white;
                    text-align: center;
                    text-decoration: none;
                }
            }
        }
    }
    article{
        width: 80%;
        margin: 20px;
    }

}
</style>
