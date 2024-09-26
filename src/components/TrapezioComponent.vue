<template>
    <div class="form-container">
        <form @submit.prevent="calcularTrapezio">
            <h6 class="form-title" style="color: black;">Cálculo de Área de Trapézio</h6>
            <label for="baseMaior" style="color: black;">BASE MAIOR:</label>
            <input type="text" v-model="baseMaior" placeholder="Digite o valor da base maior" class="input-field" />
            <label for="baseMenor" style="color: black;">BASE MENOR:</label>
            <input type="text" v-model="baseMenor" placeholder="Digite o valor da base menor" class="input-field" />
            <label for="altura" style="color: black;">ALTURA:</label>
            <input type="text" v-model="altura" placeholder="Digite o valor da altura" class="input-field" />
            <br />
            <button type="button" @click="calcularTrapezio">Calcular área</button>
            <p v-if="resultado !==null" style="margin-top: 20px; color: black;">Área: {{ resultado.toFixed(2) }}</p>
        </form>
    </div>

</template>

<script>
export default {
    data () {
        return {
            baseMaior: '',
            baseMenor: '',
            altura: '',
            resultado: null
        };
    },
    methods: {
        calcularTrapezio() {
            const baseMaiorNumerico = parseFloat(this.baseMaior);
            const baseMenorNumerico = parseFloat(this.baseMenor);
            const alturaNumerico = parseFloat(this.altura);
            
            if (isNaN(baseMaiorNumerico) || baseMaiorNumerico <= 0 || 
                isNaN(baseMenorNumerico) || baseMenorNumerico <= 0 || 
                isNaN(alturaNumerico) || alturaNumerico <= 0) {
                alert('Por favor, insira valores válidos.');
                return;
            }

            // Cálculo da área do trapézio
            this.resultado = ((baseMaiorNumerico + baseMenorNumerico) * alturaNumerico) / 2;
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
