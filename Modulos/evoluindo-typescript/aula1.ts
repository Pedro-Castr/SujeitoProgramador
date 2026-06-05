const nome = "Pedro Castro";

console.log(`Seja bem vindo, ${nome}!`);

class Sistema {
  ip: String;

  constructor(ip: String) {
    this.ip = ip;
  }
}

const servidor1 = new Sistema("132.134.642.87");
