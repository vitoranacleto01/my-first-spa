<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/sobreNos">Sobre Nós</router-link>
      <router-link to="/loop">Loop</router-link>
      <router-link to="/trapezio">Trapezio</router-link>
      <router-link to="/circulo">Circulo</router-link>
      <router-link to="/equilatero">Equilatero</router-link>
    </nav>
  </div>
<br>
<br>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
