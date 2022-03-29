<template>
  <div id="app">
    <div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">Sobre nós</router-link>
        <router-link to="/order">Encomendas</router-link>
        <router-link to="/getorder">Encomendas em Análise</router-link>
        <router-link to="/contact">Contacto</router-link>
      </nav>
      <router-view />
    </div>
  </div>
  <footer>Nos Teus Traços &copy; 2022</footer>
</template>
<style>
#app {
  background-image: url("assets/aguarela.jpg");
  padding: auto;
  margin: 0 auto;
}

nav {
  background-color: #fff;
  padding: 20px;
  display: space-around;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

nav a {
  padding: 20px;
  font-weight: bold;
  color: rgb(1, 45, 87);
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

nav a:hover {
  border-radius: 10px;
  background-color: rgb(1, 30, 68);
  color: white;
  padding: 7px 20px;
}

footer {
  font-family: "Quicksand", sans-serif;
  font-size: 12pt;
  padding: 20px;
  text-align: center;
  background: white;
  margin-left: 1, 5%;
  margin-right: 1, 5%;
}
</style>
