
// Definindo a classe Carro
class Carro {
    constructor(modelo, cor) {
      this.modelo = modelo;
      this.cor = cor;
      this.velocidade = 0; // Novo atributo: velocidade
      this.ligado = false;
    }
  
    ligar() {
      this.ligado = true;
      console.log("Carro ligado!");
    }
  
    desligar() {
      this.ligado = false;
      console.log("Carro desligado!");
      this.velocidade = 0; // Reseta a velocidade ao desligar
      atualizarVelocidadeNaTela(); // Atualiza a velocidade na tela
    }
  
    acelerar(incremento) {
      if (this.ligado) {
        this.velocidade += incremento;
        console.log("Acelerando! Velocidade: " + this.velocidade + " km/h");
        atualizarVelocidadeNaTela(); // Atualiza a velocidade na tela
      } else {
        alert("O carro precisa estar ligado para acelerar!");
      }
    }
  }
  
  // Criando um objeto Carro
  const meuCarro = new Carro("Fusca", "Azul");
  
  // Exibindo as informações do carro na tela
  document.getElementById("modelo").textContent = meuCarro.modelo;
  document.getElementById("cor").textContent = meuCarro.cor;
  
  // Funções para atualizar a interface
  function atualizarVelocidadeNaTela() {
    document.getElementById("velocidade").textContent = meuCarro.velocidade;
  }
  
  // Adicionando os eventos aos botões
  document.getElementById("ligar").addEventListener("click", function() {
    meuCarro.ligar();
  });
  
  document.getElementById("desligar").addEventListener("click", function() {
    meuCarro.desligar();
  });
  
  document.getElementById("acelerar").addEventListener("click", function() {
    meuCarro.acelerar(10); // Acelera em 10 km/h a cada clique
  });
  







