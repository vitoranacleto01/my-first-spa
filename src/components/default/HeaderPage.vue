<template>
    <nav class="navbar navbar-expand-lg bg-body-blue">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/sobreNos">Sobre Nós</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/contato">Contato</router-link>
        </li>
        <!-- <li class="nav-item">
            <router-link to="/sobreNos">Login</router-link>
        </li> -->
      </ul>
    </div>
  </div>
</nav>
</template>

<style>

</style>

<script>

</script>