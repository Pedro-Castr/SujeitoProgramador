class Conta {
  private limite: number; // Só pode ser acessada pela mesma classe

  constructor() {
    this.limite = 450;
  }

  private aumentarLimite(quantidade: number): void {
    if (quantidade < 1000) {
      this.limite = quantidade;
      console.log(`Limite alterado para ${this.limite}`);
    } else {
      console.log(`Não foi possível alterar seu limite!`);
    }
  }

  solicitarLimite(estaAutenticado: boolean, quantidade: number): void {
    if (estaAutenticado) {
      this.aumentarLimite(quantidade);
    } else {
      console.log(`Usuário não auenticado!`);
    }
  }
}

const cliente1 = new Conta();
console.log(cliente1);
cliente1.solicitarLimite(true, 750);
cliente1.solicitarLimite(true, 1200);
console.log(cliente1);
