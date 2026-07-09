// Guarda o que foi selecionado em cada etapa
const selecao = {
  servico: null,
  barbeiro: null,
  horario: null,
};

// ===== Seleção de serviço =====
const botoesServico = document.querySelectorAll('#servicos .opcao');
botoesServico.forEach((botao) => {
  botao.addEventListener('click', () => {
    botoesServico.forEach((b) => b.classList.remove('selecionada'));
    botao.classList.add('selecionada');

    selecao.servico = botao.querySelector('.opcao-titulo').textContent;
    document.getElementById('r-servico').textContent = selecao.servico;

    verificarFormulario();
  });
});

// ===== Seleção de barbeiro =====
const botoesBarbeiro = document.querySelectorAll('[data-barbeiro]');
botoesBarbeiro.forEach((botao) => {
  botao.addEventListener('click', () => {
    botoesBarbeiro.forEach((b) => b.classList.remove('selecionada'));
    botao.classList.add('selecionada');

    selecao.barbeiro = botao.querySelector('.opcao-titulo').textContent;
    document.getElementById('r-barbeiro').textContent = selecao.barbeiro;

    verificarFormulario();
  });
});

// ===== Seleção de horário =====
const botoesHorario = document.querySelectorAll('.horario');
botoesHorario.forEach((botao) => {
  botao.addEventListener('click', () => {
    botoesHorario.forEach((b) => b.classList.remove('selecionado'));
    botao.classList.add('selecionado');

    selecao.horario = botao.textContent;
    document.getElementById('r-horario').textContent = selecao.horario;

    verificarFormulario();
  });
});

// ===== Data =====
const inputData = document.getElementById('data-agendamento');
inputData.addEventListener('change', () => {
  if (inputData.value) {
    const [ano, mes, dia] = inputData.value.split('-');
    document.getElementById('r-data').textContent = `${dia}/${mes}/${ano}`;
  } else {
    document.getElementById('r-data').textContent = '—';
  }
  verificarFormulario();
});

// ===== Máscara de WhatsApp: (85) 99999-9999 =====
const inputTelefone = document.getElementById('tel');
inputTelefone.addEventListener('input', () => {
  let valor = inputTelefone.value.replace(/\D/g, '').slice(0, 11);
  valor = valor.replace(/^(\d{2})(\d)/, '($1) $2');
  valor = valor.replace(/(\d{5})(\d{1,4})$/, '$1-$2');
  inputTelefone.value = valor;
  verificarFormulario();
});

// ===== Nome (obrigatório) =====
const inputNome = document.getElementById('nome');
inputNome.addEventListener('input', verificarFormulario);

// ===== Habilita o botão de confirmar somente quando tudo estiver preenchido =====
const btnConfirmar = document.getElementById('btn-confirmar');

function verificarFormulario() {
  const nomePreenchido = inputNome.value.trim().length > 0;
  const telefonePreenchido = inputTelefone.value.replace(/\D/g, '').length >= 10;
  const dataPreenchida = inputData.value !== '';

  const tudoOk =
    selecao.servico &&
    selecao.barbeiro &&
    selecao.horario &&
    dataPreenchida &&
    nomePreenchido &&
    telefonePreenchido;

  btnConfirmar.disabled = !tudoOk;
}