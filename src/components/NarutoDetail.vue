<template>
  <div class="container" v-if="character">
    <div class="card text-center my-4">
      <div class="card-body">
        <div class="row">
          <div class="col-3">
            <img :src="character.images[0]" class="img-thumbnail" />
          </div>
          <div class="col-9">
            <h2 class="card-title">{{ character.name }}</h2>
            <!-- Tem coisa faltando mano, novamente se vira nos 30! -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="text-center mt-4" v-else-if="character">
    <p>Carregando...</p>
  </div>

  <!-- <div class="text-center mt-4">
    <p>Erro irmão, se vira nos 30!</p>
  </div> -->
</template>

<script>
export default {
  props: ["id"], //propriedade que queremos buscar.
  data() {
    //variaveis que queremos manipular
    return {
      character: null,
      loading: true,
      error: false,
    };
  },
  methods: {
    //comportamento desse componente, funções.
    fetchCharacter() {
      fetch(`https://dattebayo-api.onrender.com/characters/${this.id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.character = data;
          this.loading = false;
        })
        .catch(() => {
          this.error = true;
          this.error = false;
        });
    },
  },
  mounted() {
    //ciclo de vida que a gente quer manipular, quando terminamos de montar um componente.
    this.fetchCharacter();
  },
  watch: {
    //atento, "assistindo" e "ouvindo" quaisquer mudanças que possam ocorrer no componente, toda vez que o id mudar, ele percebe essa mudança e exibi-a para a gente.
    id() {
      this.fetchCharacter();
    },
  },
};
</script>

<style></style>
