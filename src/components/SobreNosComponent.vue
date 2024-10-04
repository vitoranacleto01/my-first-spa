<template>
    <div class="center">
      <p>Bem-vindo a sobre nós!</p>
    </div>
  
    <div>
      <form @submit.prevent="addPerson">
        <input type="text" v-model="name" placeholder="nome" required />
        <br />
        <input type="number" v-model="age" placeholder="idade" required />
        <br />
        <input type="text" v-model="phrase" placeholder="frase" required />
        <br />
        <br />
        <button type="submit">Adicionar</button>
        <br />
        <br />
      </form>
  
      <div class="grid">
        <div class="grid-header">
          <p><b>pessoa 1</b></p>
          <p><b>pessoa 2</b></p>
          <p><b>pessoa 3</b></p>
          <p><b>pessoa 4</b></p>
        </div>
        <div v-for="(person, index) in personList" :key="index" class="grid-item">
          <p>{{ person.name }}</p>
          <p>{{ person.age }}</p>
          <p>{{ person.phrase }}</p>
          <img v-if="person.imageUrl" :src="person.imageUrl" alt="Foto" width="100" />
        </div>
      </div>
    </div>
  
    <div>
      <h1>Upload de Imagem</h1>
      <input type="file" @change="onFileChange" accept="image/*" />
      <button @click="uploadImage">Enviar Imagem</button>
      <div v-if="uploadMessage">{{ uploadMessage }}</div>
      <div v-if="imageUrl">
        <h2>Imagem Pré-visualização:</h2>
        <img :src="imageUrl" alt="Preview" width="200" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        personList: [],
        name: '',
        age: '',
        phrase: '',
        selectedFile: null,
        imageUrl: null,
        uploadMessage: '',
      };
    },
    methods: {
      addPerson() {
        if (!this.name || !this.age || !this.phrase) return;
  
        let person = {
          name: this.name,
          age: this.age,
          phrase: this.phrase,
          imageUrl: this.imageUrl, // Adiciona a URL da imagem
        };
        this.personList.push(person);
  
        // Limpar os campos após adicionar
        this.name = '';
        this.age = '';
        this.phrase = '';
        this.imageUrl = null; // Limpa a imagem após adicionar
      },
      onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.selectedFile = file;
          this.imageUrl = URL.createObjectURL(file); // Pré-visualização da imagem
        }
      },
      async uploadImage() {
        if (!this.selectedFile) {
          alert("Por favor, selecione uma imagem primeiro.");
          return;
        }
  
        const formData = new FormData();
        formData.append("image", this.selectedFile);
  
        try {
          const response = await fetch("URL_DO_SEU_BACKEND", {
            method: "POST",
            body: formData,
          });
  
          if (response.ok) {
            const data = await response.json();
            this.uploadMessage = "Imagem enviada com sucesso!";
            console.log("Imagem enviada com sucesso:", data);
            // Reset image preview and selected file
            this.selectedFile = null;
            this.imageUrl = null;
          } else {
            this.uploadMessage = "Erro ao enviar a imagem: " + response.statusText;
            console.error("Erro ao enviar a imagem:", response.statusText);
          }
        } catch (error) {
          this.uploadMessage = "Erro ao enviar a imagem: " + error.message;
          console.error("Erro ao enviar a imagem:", error);
        }
      },
    },
  };
  </script>
  
  <style>
  .center {
    text-align: center;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 20px;
  }
  
  .grid-header {
    font-weight: bold;
    display: contents;
  }
  
  .grid-item {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
  }
  </style>
  