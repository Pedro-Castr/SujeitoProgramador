// Mixin é uma forma de fazer com que uma classe consiga herdar mais de uma.
// Para isso funcionar é necessário algumas gambiarras como importar um arquivo applyMixin diretamente da documentação
// https://www.typescriptlang.org/docs/handbook/mixins.html#how-does-a-mixin-work

// import applyMixins from "./mixin/applyMixin";

class Automovel {
  ligar(): void {
    console.log("Automóvel ligado");
  }
  desligar(): void {
    console.log("Automóvel desligado");
  }
}

class Especificacao {
  descricao: string;

  constructor(descricao: string) {
    this.descricao = descricao;
  }
}

class Carro {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

interface Carro extends Automovel, Especificacao {}

// applyMixins(Carro, [Automovel, Especificacao]);

const gol = new Carro("Gol 1.6");

gol.descricao = "Carro gol 1.6";
console.log(gol);
gol.ligar();
