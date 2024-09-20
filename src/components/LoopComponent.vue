<template>
    <div>
            <form @submit.prevent="addItem">
                <input type="text" v-model="inputValue">
                <input type="submit" value="Adicionar" @click="addItem()">
            </form>
            <hr>
            <table style="border: 1px solid black;">
                <tr>
                    <td>Index</td>
                    <td>Key</td>
                </tr>

                <tr v-for="(item, index) in itens" :key="index">
                    <td>{{ index }}</td>
                    <td>{{ item }}</td>
                </tr>
            </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itens: [],
            inputValue: ''
        }
    }, 
    methods: {
        addItem() {
            if (this.inputValue) {
                this.itens.push(this.inputValue)
                this.inputValue = ''
            }
        }
    }
}
</script>

<style>
    table, td, tr {
        border: 1px solid black;
    }
</style>