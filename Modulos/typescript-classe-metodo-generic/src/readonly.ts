class Pessoa {
  readonly id: string; // Não pode ser alterado, apenas lido
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.id = "123";
    this.nome = nome;
    this.idade = idade;
  }
}

const pessoa1 = new Pessoa("Luiza", 20);

// pessoa1.id = "1234" Não é possível alterar por ser readonly

console.log(pessoa1);
console.log(pessoa1.id);
