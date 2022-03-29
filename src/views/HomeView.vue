<template>
  <div id="center">
    <div class="img1"></div>
    <nav><router-link to="/signin">Login</router-link></nav>
  </div>

</template>
<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>

  nav a{
    padding: 10px 20px;
    font-weight: bold;
    background-color:rgb(1, 30, 68);
    border-radius: 10px;
    color:white;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
   nav a:hover{
    border-radius: 10px;
    color:rgb(1, 30, 68);
    padding: 10px 20px;
    background-color: transparent;

  }
.img1 {
  background-image: url("../assets/logo.png");
  height: 150px;
  padding: 160px;
  margin-left: 30%;
  margin-right: 30%;
  background-position: center;
  background-size: 80%;
  background-repeat: no-repeat;
}
#center {
  background: fixed;
  text-align: center;
  background-color: white;
  align-content: center;
  padding: auto;
}
footer {
  background-color: white;
  padding: 20px;
}
</style>
