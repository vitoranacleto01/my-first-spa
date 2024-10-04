<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email:</label>
          <input type="email" class="form-control" v-model="email" required>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Assunto:</label>
          <div class="form-floating">
            <select v-model="subject" class="form-select" id="floatingSelect" required>
              <option value="" disabled selected>Escolha uma opção:</option>
              <option value="avaliacao">Avaliação</option>
              <option value="reclamacao">Reclamação</option>
              <option value="ajuda">Ajuda</option>
            </select>
            <label for="floatingSelect">Assunto</label>
          </div>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Mensagem:</label>
          <br>
          <textarea v-model="message" id="message" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
  
      <Modal v-if="modalVisible" @close="modalVisible = false">
        <h2>Mensagem Enviada</h2>
        <p>Sua mensagem foi enviada com sucesso!</p>
        <button @click="modalVisible = false">Fechar</button>
      </Modal>
    </div>
  </template>
  
  <script>
  import ModalPage from './default/ModalPage.vue'; // Certifique-se de importar seu componente Modal
  
  export default {
    components: {
      ModalPage,
    },
    data() {
      return {
        email: '',
        subject: '',
        message: '',
        modalVisible: false,
      };
    },
    methods: {
      handleSubmit() {
        // Exibir o modal após o envio
        this.modalVisible = true;
  
        // Limpar os campos do formulário
        this.email = '';
        this.subject = '';
        this.message = '';
      },
    },
  };
  </script>
  
  <style>

  </style>
  