
// Seleciona os elementos da página
const modelo = document.getElementById('modelo');
const cor = document.getElementById('cor');
const velocidade = document.getElementById('velocidade');
const carro = document.getElementById('carro');
const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const acelerar = document.getElementById('acelerar');

// Informações do carro
let carroLigado = false;
let velocidadeAtual = 0;
let modeloCarro = "McQueen";
let corCarro = "Vermelho";

// Atribuindo valores ao modelo e cor do carro
modelo.textContent = modeloCarro;
cor.textContent = corCarro;

// Função para ligar o carro
ligar.addEventListener('click', () => {
    if (!carroLigado) {
        carroLigado = true;
        velocidadeAtual = 0; // O carro começa parado ao ligar
        atualizarVelocidade();
        alert("O carro foi ligado!");
    } else {
        alert("O carro já está ligado!");
    }
});

// Função para desligar o carro
desligar.addEventListener('click', () => {
    if (carroLigado) {
        carroLigado = false;
        velocidadeAtual = 0;
        atualizarVelocidade();
        carro.style.transform = "translateX(0px)"; // Reseta a posição do carro
        alert("O carro foi desligado!");
    } else {
        alert("O carro já está desligado!");
    }
});

// Função para acelerar o carro
acelerar.addEventListener('click', () => {
    if (carroLigado) {
        velocidadeAtual += 10; // Acelera 10 km/h a cada clique
        if (velocidadeAtual > 200) {
            velocidadeAtual = 200; // Limite máximo de velocidade
        }
        atualizarVelocidade();
        moverCarro(); // Move o carro conforme a velocidade
    } else {
        alert("Ligue o carro antes de acelerar!");
    }
});

// Função para atualizar a velocidade exibida
function atualizarVelocidade() {
    velocidade.textContent = velocidadeAtual;
}

// Função para mover o carro na tela
function moverCarro() {
    // A distância que o carro deve se mover é baseada na velocidade
    let distancia = velocidadeAtual * 2; // O multiplicador 2 controla a rapidez do movimento
    carro.style.transform = `translateX(${distancia}px)`; // Move o carro para a direita
}


