<template>
  <nav>Pedidos em Análise</nav>
  <div class="order" v-for="order in orders" :key="order.name">
    <div class="box">
      <div class="center">
        <p>Nome:</p>
        <h1>{{ order.name }}</h1>

        <p>Estilo:</p>
        <h1>{{ order.style }}</h1>

        <p>Formato:</p>
        <h1>{{ order.format }}</h1>
        <div class="img1"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.img1 {
  background-image: url("../assets/logo.png");
  height: 100px;
  padding: 5px;
  margin-left: 15%;
  margin-right: 15%;
  background-position: 120px;
  background-size: 40%;
  background-repeat: no-repeat;
}
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
p {
  font-weight: bolder;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 12pt;
}
h1 {
  font-family: sans-serif;
  font-size: 10pt;
}
.order {
  max-width: 500px;
  margin: 0 auto;
}
.center {
  margin-top: 120px;
  margin-left: 100px;
  text-align: left;
}
footer {
  font-family: sans-serif;
  font-size: 12pt;
  padding: 20px;
  text-align: center;
  background: white;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
.box {
  background-image: url("../assets/postit.png");
  background-position: center;
  background-size: 100%;
  width: 500px;
  height: 500px;
  padding: 20px;
  margin: 0 auto;
}
</style>
<script>
import axios from "axios";

export default {
  name: "GetOrderView",

  data() {
    return {
      orders: "",
    };
  },
  mounted() {
    axios
      .get("https://projetofinal--labweb-default-rtdb.firebaseio.com/.json")
      .then((res) => {
        console.log(res.data);
        this.orders = res.data;
      });
  },
};
</script>