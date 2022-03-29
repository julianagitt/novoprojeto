<template>
  <div class="root">
    <div class="center">
      <div class="img1"></div>
      <h2>Login</h2>
      <input
        class="email"
        v-model="email"
        placeholder="Email"
        type="text"
        maxlength="50"
      />
      <p v-if="errMsg">{{ errMsg }}</p>
      <input
        class="password"
        v-model="password"
        placeholder="Password"
        type="password"
      />

      <button @click="signIn">Entrar</button>

      <p>Não tem Conta de Login?</p>
      <span>
        <router-link to="/signup"> Sign in </router-link>
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();

const signIn = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log("Login Concluido!");
      console.log(auth.currentUser);
      router.push("/order");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid email":
          errMsg.value = "Não foi encontrado nenhum registo com este Email!";
          break;
        case "auth/wrong-password":
          errMsg.value = "Password icorrecta!";
          break;
      }
    });
};
</script>

