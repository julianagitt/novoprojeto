<template>
  <div class="root">
    <div class="center">
      <div class="img1"></div>
      <h2>Crie a sua Conta</h2>
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />

      <input
        type="password"
        placeholder="Confirm Password"
        v-model="passwordConf"
      />
      <button @click="signUp">Registar</button>
      <p></p>
      <span>
        <router-link to="/signin"> Login </router-link>
      </span>
    </div>
  </div>
  <br>
  <br>
</template>


<style scoped>
footer {
  font-family: "Quicksand", sans-serif;
  font-size: 12pt;
  padding: 20px;
  text-align: center;
  background: #eee;
  margin-top: 20px;
  margin-left: 1, 5%;
  margin-right: 1, 5%;
}
h2 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.root {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  margin-top: 50px;
  margin-bottom: 20px;
  border-radius: 20px;
}
.center {
  background: fixed;
  text-align: center;
  background-color: white;
  align-content: center;
  padding: auto;
}
input {
  border: none;
  outline: none;
  border-bottom: 1px solid #ddd;
  font-size: 1em;
  padding: 5px 0;
  margin: 10px 5px 0;
  width: 100%;
}
.img1 {
  background-image: url("../assets/logo.png");
  height: 150px;
  padding: 0px;
  margin-top: 5px;
  margin-left: 20%;
  margin-right: 20%;
  background-position: center;
  background-size: 90%;
  background-repeat: no-repeat;
}
button {
  background-color: rgb(1, 30, 68);
  font-weight: bold;
  padding: 10px 20px;
  margin: 0 auto;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 0.5s;
  margin-top: 15px;
}
button:hover {
  background-color: transparent;
  font-weight: bold;
  color: rgb(1, 30, 68);
}
</style>
<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const signUp = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log(auth.currentUser);
      router.push("/signup");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>

    
