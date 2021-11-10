<template>
  <div>
    <h2>Perfil del administrador</h2>
    <div class="card">
      <div class="card-body">
        <form action="" method="">
          <img src="https://shortest.link/1DdK" alt="" />
          <div class="form-group">
            <label for="exampleInputEmail1"
              >Nombre del administrador del sistema</label
            >
            <input
              type="text"
              class="form-control"
              :placeholder="name"
              v-model="name"
            />
            <label for="exampleInputEmail1"
              >Correo del administrador del sistema</label
            >
            <input
              type="email"
              class="form-control"
              placeholder="example@admin.com"
              v-model="email"
            />
          </div>
          <button
            class="btn btn-primary"
            id="guardar"
            v-on:click="changeName()"
          >
            Change information
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: ""
    };
  },
  methods: {
    changeName() {
      this.$store.state.user.name = this.name;
      this.$store.state.user.email = this.email;
      this.$store.dispatch("putAdminName");
    },
  },
  mounted() {
    $("#guardar").on("click", function (event) {
      event.preventDefault();
    });
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  margin: auto;
}
.card .card-body form {
  text-align: center;
}
.card .card-body form button {
  margin-top: 20px;
}
.card .card-body form img {
  width: 100px;
  border-radius: 50%;
}
.card .card-body form .form-group {
  text-align: start;
}
.card .card-body form .form-group label {
  margin: 10px auto;
}
</style>