<template>
    <div>
        <form @submit.prevent="addPerson">
            <input type="text" v-model="name" placeholder="nome">
            <br>
            <input type="text" v-model="age" placeholder="idade">
            <br>
            <input type="text" v-model="document" placeholder="documento">
            <br>
            <input type="text" v-model="team" placeholder="time">
            <br>
            <br>

            <button type="button" @click="addPerson">Adicionar</button>
            <br>
            <br>
        </form>

        <p v-for="(person, index) in personList" :key="index">
            <p><b>Nome:</b> {{ person.name }}</p> 
            <p><b>Idade:</b> {{ person.age }}</p> 
            <p><b>Documento:</b> {{ person.document }}</p> 
            <p><b>Time que torce:</b> {{ person.team }}</p> 
        </p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            personList: [],
            name: '',
            age: '',
            document: '',
            team: ''
        }
    },
    methods: {
        addPerson() {
            let person = {
                name: this.name,
                age: this.age,
                document: this.document,
                team: this.team,
            }
            this.personList.push(person)
        }
    }
}

</script>

<style>

</style>