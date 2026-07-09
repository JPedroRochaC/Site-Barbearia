const form = document.getElementById('form-login');
const mensagemErro = document.getElementById('mensagem-erro');

form.addEventListener('submit', async (evento) => {
  evento.preventDefault();
  mensagemErro.textContent = '';

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  //quando o backend existir, substitui isso pelo fetch real:
  // POST /api/admin/login  { email, senha }
  console.log('Login pronto para enviar ao backend:', { email, senha });
});