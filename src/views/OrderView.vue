<template>
  <nav>Faça a sua Encomenda!</nav>
  <form id="order" method="Post" action="" enctype="multipart/form-data">
    <div class="box">
      <div class="input-container">
        <label for="name">Nome</label>
        <input
          type="text"
          id="name"
          v-model="name"
          placeholder="Indique o seu Nome"
        />
      </div>
      <br />
      <div class="input-container">
        <label for="style">Estilo do Desenho:</label>
        <select
          name="style"
          id="style"
          v-model="style"
          placeholder="Escolha um Estilo"
        >
          <option value="">Escolha um Estilo</option>
          <option value="Linhas Pretas">Linhas Pretas</option>
          <option value="Linhas Pretas com preenchimento colorido">
            Linhas Pretas com preenchimento colorido
          </option>
        </select>
      </div>
      <br />
      <div class="input-container">
        <label for="format">Formato:</label>
        <select
          name="format"
          id="format"
          v-model="format"
          placeholder="Escolha um Formato"
        >
          <option value="">Escolha um Formato</option>
          <option value="PNG">PNG</option>
          <option value="JPG">JPG</option>
          <option value="PNG/JPG">PNG/JPG</option>
        </select>
      </div>
      <br />
      <br />
      <div class="input-container">
        <input
          @click="submit()"
          type="submit"
          class="submit-btn"
          value="Encomendar"
        />
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "get-request-async-await",
  data() {
    return {
      name: "",
      format: "",
      style: "",
    };
  },

  methods: {
    submit() {
      axios
        .post(
          "https://projetofinal--labweb-default-rtdb.firebaseio.com/.json",
          {
            name: this.name,
            format: this.format,
            style: this.style,
          }
        )
        .then((response) => console.log("res" + response));
      this.$router.push("/getorder");
    },
  },
};
</script>
<style scoped>
nav {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: rgb(1, 30, 68);
  font-size: 30px;
  color: #fff;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  font-weight: bolder;
}
footer {
  font-family: "Quicksand", sans-serif;
  font-size: 12pt;
  padding: 20px;
  text-align: center;
  background: lavender;
  margin-top: 20px;
  margin-left: 1, 5%;
  margin-right: 1, 5%;
}
.box2 {
  height: 50px;
  width: 400px;
  padding: 20px;
  background-color: rgb(1, 30, 68);
}
.box {
  width: 400px;
  padding: 20px;
  background-color: lavender;
}
#order {
  max-width: 500px;
  margin: 0 auto;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
label {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  margin-bottom: 15px;
  color: black;
  padding: 5px 10px;
  border-left: 4px solid rgb(1, 30, 68);
}
input,
select {
  padding: 5px 10px;
  width: 300px;
}
.submit-btn {
  background-color: rgb(1, 30, 68);
  padding: 10px 5px;
  margin: 0 auto;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 0.5s;
}
.submit-btn:hover {
  background-color: transparent;
  color: rgb(1, 30, 68);
}
</style>