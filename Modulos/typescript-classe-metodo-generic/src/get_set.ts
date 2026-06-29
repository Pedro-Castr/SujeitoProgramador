class Jogo {
  private servidor: string;
  private id: string = "1234";

  constructor(servidor: string) {
    this.servidor = servidor;
  }

  // Método get para pegar o valor ao invés de acessar diretamente o valor
  get getServidorIP(): string {
    return this.servidor;
  }

  // Método set para alterar o valor sem ter acesso direto ao valor
  set setServidorIP(ip: string) {
    this.servidor = ip;
  }
}

const GTA6 = new Jogo("192.168.5.10");

GTA6.setServidorIP = "192.168.6.11";
console.log(GTA6.getServidorIP);
