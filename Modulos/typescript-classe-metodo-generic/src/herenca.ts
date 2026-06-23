// Herança: quando nós temos uma classe que herda atributos ou métodos de outra classe

class Usuario {
  nome: string;
  email: string;

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
}

class Admin extends Usuario {
  cargo: string;
  nivel: number;

  constructor(nome: string, email: string, cargo: string, nivel: number) {
    // construtor da classe pai
    super(nome, email);

    this.cargo = cargo;
    this.nivel = nivel;
  }
}

const Usuario1 = new Admin("Pedro", "pedro@gmail.com", "Dev", 3);
console.log(Usuario1);
