// Classe genérica de herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    // Estrutura de decisão
    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "usou um ataque desconhecido";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando objetos (heróis)
const herois = [
  new Heroi("Arthus", 30, "guerreiro"),
  new Heroi("Merlin", 150, "mago"),
  new Heroi("Lee", 40, "monge"),
  new Heroi("Hanzo", 28, "ninja")
];

// Laço de repetição
for (let heroi of herois) {
  heroi.atacar();
}