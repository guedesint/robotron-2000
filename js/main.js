const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]")

const pecas = {
  "bracos": {
    "forca": 29,
    "poder": 35,
    "energia": -21,
    "velocidade": -5
  },

  "blindagem": {
    "forca": 41,
    "poder": 20,
    "energia": 0,
    "velocidade": -20
  },

  "nucleos": {
    "forca": 0,
    "poder": 7,
    "energia": 48,
    "velocidade": -24
  },

  "pernas": {
    "forca": 27,
    "poder": 21,
    "energia": -32,
    "velocidade": 42
  },

  "foguetes": {
    "forca": 0,
    "poder": 28,
    "energia": 0,
    "velocidade": -2
  }
}


controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca)
    
  })
});


function manipulaDados(operacao, controle, pecaStatus) {
  const peca = controle.querySelector('[data-contador]')
  if(operacao === '+') {
      peca.value = String(parseInt(peca.value) + 1).padStart(2, '0');
      estatisticas.forEach( (elemento) => {
          elemento.textContent = parseInt(elemento.textContent) + pecas[pecaStatus][elemento.dataset.estatistica]
      })
  } else {
      if(parseInt(peca.value)) {
          peca.value = String(parseInt(peca.value) - 1).padStart(2, '0');
          estatisticas.forEach( (elemento) => {
          elemento.textContent = parseInt(elemento.textContent) - pecas[pecaStatus][elemento.dataset.estatistica]
          })
      }
  }
}



const robotron = document.querySelector("#robotron");
const cores = document.querySelectorAll("[data-cor]");


cores.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
      const cor = evento.target.dataset.cor;
      robotron.src = `img/robotron-${cor}.png`;
    })
})
























// // Seleciona a imagem
// const imagem = document.querySelector('#robotron');

// // Seleciona a lista de cores
// const listaCores = document.querySelector('.lista-cores');

// // Adiciona um evento de clique à lista
// listaCores.addEventListener('click', function(event) {
//   // Verifica se o elemento clicado é um elemento da lista
//   if (event.target.tagName === 'LI') {
//     // Muda a imagem de acordo com a cor clicada
//     imagem.src = `img/robotron-${event.target.classList[1]}.png`;
//   }
// });
