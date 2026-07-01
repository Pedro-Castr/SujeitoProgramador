import { verificaPessoa } from "./verificaPessoa";

class Pessoa {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  @verificaPessoa(20)
  cadastrarPessoa() {
    console.log(`Bem vindo ao sistema, ${this.nome}!`);
  }
}

const pessoa1 = new Pessoa("Pedro");
pessoa1.cadastrarPessoa();
