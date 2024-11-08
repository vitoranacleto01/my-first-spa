<template>
  <div class="container">
    <div class="row">
      <!-- Exibe uma mensagem enquanto aguarda dados da api -->
      <div v-if="loading" class="col-12 text-center">
        <p>loading...</p>
      </div>

      <!-- Exibe uma mensagem de erro caso a api falhe -->
      <div v-if="error" class="col-12 text-center">
        <p>Deu erro!</p>
      </div>

      <!-- Exibe lista de personagens -->
      <div
        v-else
        v-for="character in characters"
        :key="character.id"
        class="col-md-4"
      >
        <div class="card mb-4">
          <img :src="character.images[0]" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ character.name }}</h5>
            <router-link
              :to="{ name: 'NarutoDetail', params: { id: character.id } }"
            >
              Detalhes
            </router-link>
          </div>
          <div class="card-dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Jutsus
            </a>
            <ul class="dropdown-menu">
              <li
                v-for="(jutsu, index) in character.jutsu"
                :key="index"
                class="dropdown-list"
              >
                <a href="#">{{ jutsu }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [],
      loading: true,
      error: false,
    };
  },
  methods: {
    fetchNaruto() {
      fetch("https://dattebayo-api.onrender.com/characters")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network error.");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);

          this.characters = data.characters;
          this.loading = false;
        })
        .catch(() => {
          this.error = true;
          this.loading = false;
        });
    },
  },
  mounted() {
    this.fetchNaruto();
  },
};
</script>

<style></style>
