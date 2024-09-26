<template>
  <div class="container-fluid">
    <h3 class="text-center">Cálculo de Formas Geométricas</h3>
    <div class="row">
      <div class="col-12 col-md-4">
        <CirculoComponent />
      </div>
      <div class="col-12 col-md-4">
        <EquilateroComponent />
      </div>
      <div class="col-12 col-md-4">
        <TrapezioComponent />
      </div>
    </div>
  </div>
</template>

<script>
import CirculoComponent from './components/CirculoComponent.vue';
import EquilateroComponent from './components/EquilateroComponent.vue';
import TrapezioComponent from './components/TrapezioComponent.vue';

export default {
  name: 'App',
  components: {
    CirculoComponent,
    EquilateroComponent,
    TrapezioComponent,
  },
}
</script>

<style>
.container-fluid {
    padding: 20px;
}
</style>
