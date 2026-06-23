// Encapsulamento: consiste em esconder os detalhes internos de um objeto e
// permitir o acesso apenas por meio de métodos controlados.
// Para isso são utilizados: public, protected, private e readonly

class Usuario {
  protected id: number; // Só pode ser chamado na classe pai e classes filhas
  public nome: string;
  public email: string;

  constructor(id: number, nome: string, email: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }
}

class Admin extends Usuario {
  public cargo: string;
  public nivel: number;

  constructor(
    id: number,
    nome: string,
    email: string,
    cargo: string,
    nivel: number,
  ) {
    // construtor da classe pai
    super(id, nome, email);

    this.cargo = cargo;
    this.nivel = nivel;
  }

  mudarCargo(): void {
    console.log(`Alterando cargo do usuário id ${this.id}`);
  }
}

const Usuario1 = new Admin(1, "Pedro", "pedro@gmail.com", "Dev", 3);
Usuario1.cargo = "Programador";
// Usuario1.id; Não é permitido por ser protegida

console.log(Usuario1);
Usuario1.mudarCargo();
