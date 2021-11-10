<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'app',
  components: {      
  },
  methods: {
    ...mapActions(['cargarLoadStorage'])
  },
  created(){
    this.cargarLoadStorage()
  }
};
</script>