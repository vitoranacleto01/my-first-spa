<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/sobreNos">Sobre Nós</router-link>
      <router-link to="/loop">Loop</router-link>
      <router-link to="/trapezio">Trapezio</router-link>
      <router-link to="/circulo">Circulo</router-link>
      <router-link to="/equilatero">Equilatero</router-link>
      <router-link to="/login">login</router-link>


    </nav>
  </div>
  <div id="app">
    <HeaderPage></HeaderPage>
    <ModalPage></ModalPage>
    <router-view></router-view>
    <div class="footer"><FooterPage></FooterPage></div>
  </div>
</template>

<script>
import HeaderPage from './components/default/HeaderPage.vue';
import ModalPage from './components/default/ModalPage.vue';
import FooterPage from './components/default/FooterPage.vue';

export default {
  name: 'App',
  components: {
     HeaderPage,
     ModalPage,
     FooterPage
  }
}
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Faz com que o app ocupe a altura total da tela */
  }

  .footer {
    margin-top: auto; /* Empurra o footer para o fundo */
  }
</style>
