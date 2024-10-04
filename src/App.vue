<template>
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
