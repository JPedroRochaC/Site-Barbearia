const cpfInput = document.getElementById('cpf');

cpfInput.addEventListener('input', () => {
  let valor = cpfInput.value.replace(/\D/g, ''); // remove tudo que não é número
  valor = valor.slice(0, 11); // limita a 11 dígitos

  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  cpfInput.value = valor;
});