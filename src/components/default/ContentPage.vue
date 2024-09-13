<template>
<section>
    <div>
        <p>Meu Conteúdo: Corinthians!</p>
        <div>
            <!-- V-MODEL -->
            <input v-model="nome" placeholder="Digite seu nome">
            <p>Seu nome é: {{ nome }}</p>

            <!-- V-CLICK -->
            <button @click="submeterFormulario()">Procurar Usuário</button>

            <!-- V-IF E V-ELSE -->
            <p v-if="url">
                {{ url }}
            </p>
            <p v-else>
                Vc ainda não digitou nenhum nome.
            </p>
        </div>
    </div>
</section>
</template>

<script>

export default {
    name: 'ContentPage',
    data() {
        return {
            nome: '',
            url: ''
        }
    },
    methods: {
        submeterFormulario() {
            let response = 
            fetch(`https://api.github.com/users/${this.nome}`)
            .then((data) => {
                this.url = data.url;
                console.log(data.url);
            });
        }
    },
}
</script>

<style>

</style>