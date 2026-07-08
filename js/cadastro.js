// mascara de CPF (mesma lógica do login)
const cpfInput = document.getElementById('cpf');
cpfInput.addEventListener('input', () => {
  let valor = cpfInput.value.replace(/\D/g, '');
  valor = valor.slice(0, 11);
  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  cpfInput.value = valor;
});

// validação antes de enviar o formulário
const form = document.getElementById('form-cadastro');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmar-senha');
const mensagemErro = document.getElementById('mensagem-erro');

form.addEventListener('submit', (evento) => {
  evento.preventDefault(); // impede o envio até validar

  if (senha.value !== confirmarSenha.value) {
    mensagemErro.textContent = 'As senhas não coincidem.';
    return;
  }

  if (senha.value.length < 6) {
    mensagemErro.textContent = 'A senha deve ter no mínimo 6 caracteres.';
    return;
  }

  mensagemErro.textContent = '';

 //  depois vai entrar o fetch() para o backend (POST /api/cadastro)
  console.log('Formulário válido, pronto para enviar ao backend.');
});