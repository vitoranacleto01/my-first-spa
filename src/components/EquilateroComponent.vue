<template>
    <div class="form-container">
        <form @submit.prevent="calcularEquilatero">
            <h6 class="form-title" style="color: black;">Cálculo de Área de Triângulo Equilátero</h6>
            <label for="lado" style="color: black;">LADO:</label>
            <input type="text" v-model="lado" placeholder="Digite o valor do lado" class="input-field" />
            <br />
            <button type="button" @click="calcularEquilatero">Calcular área</button>
            <p v-if="resultado !== null" style="margin-top: 20px; color: black;">Área:  {{ resultado.toFixed(2) }}</p>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lado: '',
            resultado: null
        };
    }, 
    methods: {
        calcularEquilatero() {
            const ladoNumerico = parseFloat(this.lado);
            if (isNaN(ladoNumerico) || (ladoNumerico <= 0)) {
                alert('Por favor, insira um valor válido para o lado.')
                return;
            } this.resultado = Math.sqrt(3)/4 * Math.pow(ladoNumerico,2);
        }
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
    text-align: center;
    margin-bottom: 20px;
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
