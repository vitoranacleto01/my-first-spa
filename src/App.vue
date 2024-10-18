<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/sobreNos">Sobre Nós</router-link>
      <router-link to="/loop">Loop</router-link>
      <router-link to="/trapezio">Trapezio</router-link>
      <router-link to="/circulo">Circulo</router-link>
      <router-link to="/equilatero">Equilatero</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/contato">Contato</router-link>
      <router-link to="/naruto">Naruto</router-link>
    </nav>
    <router-view class="router-view"></router-view>
  </div>
  <div class="footer"><FooterPage /></div>
</template>

<script>
import HeaderPage from "./components/default/HeaderPage.vue";
import ModalPage from "./components/default/ModalPage.vue";
import FooterPage from "./components/default/FooterPage.vue";

export default {
  name: "App",
  components: {
    HeaderPage,
    ModalPage,
    FooterPage,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Inclui padding e bordas no tamanho total */
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

nav {
  background-color: #f8f8f8; /* Cor de fundo para o nav */
  padding: 10px; /* Espaçamento para o nav */
}

.router-view {
  flex: 1; /* Faz com que o conteúdo ocupe o espaço restante */
}

.footer {
  text-align: center;
  width: 100%;
  background-color: pink; /* Cor de fundo */
  padding: 5px; /* Espaçamento interno */
  /*box-sizing: border-box; Inclui padding na largura total */
}
</style>
