<template>
    <div class="content">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Senha</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Lembrar da Senha</label>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  
    <footer>
      <div>
        <p>&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
      </div>
    </footer>
  </template>
  
  <script>
  
  </script>
  
  <style>
    body {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      margin: 0;
    }
  
    .content {
      flex: 1;
      padding: 20px; 
    }
  
    footer {
      background-color: black;
      color: #fff;
      padding: 20px;
      text-align: center;
      margin-top: 400px;
      text-align: center;
      text-align: justify;
      margin-left: 300px;
    
    }
  
    footer a {
      color: #fff;
      margin: 0 10px;
      text-decoration: none; 
    }
  
    footer a:hover {
      text-decoration: underline; 
    }
  </style>
  