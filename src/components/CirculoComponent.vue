<template>
    <div class="form-container">
        <form @submit.prevent="calcularCirculo">
            <h6 class="form-title" style="color: black;">Cálculo de Área de Círculo</h6>
            <label for="raio" style="color: black;">RAIO:</label>
            <input type="text" v-model="raio" placeholder="Digite o valor do raio" class="input-field" />
            <br />
            <button type="button" @click="calcularCirculo">Calcular área</button>
            <p v-if="resultado !== null" style="margin-top: 20px; color: black;">Área:  {{ resultado.toFixed(2) }}</p>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            raio: '',
            resultado: null
        };
    },
    methods: {
        calcularCirculo() {
            const raioNumerico = parseFloat(this.raio);
            if (isNaN(raioNumerico) || (raioNumerico <= 0)) {
                alert('Por favor, insira um valor válido para o raio.');
                return;
            } this.resultado = Math.PI * Math.pow(raioNumerico,2); 
        }//calculo da area
    }
}
</script>

<style scoped>
/* Estilos do formulário (igual aos anteriores) */
.form-container {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}

.form-title {
    text-align: center; /* Centraliza o título */
    margin-bottom: 20px; /* Espaço abaixo do título */
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
}

.input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s;
}

.input-field:focus {
    border-color: #007bff;
    outline: none;
}

.submit-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.submit-button:hover {
    background-color: #0056b3;
}
</style>
