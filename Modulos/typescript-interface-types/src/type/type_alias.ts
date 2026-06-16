type Uuid = number | string | null;

function acessar(uuid: Uuid, nome: string): void {
  console.log(`ID: ${uuid} - Bem vindo ${nome}`);
}

function logUsuario(uuid: Uuid): void {
  console.log(`Conta referende ao ID ${uuid}`);
}

acessar(123, "Pedro");
acessar("25", "Matheus");
logUsuario("123");

type Moedas = "BRL" | "USD" | "BTC" | "CAD";

function comprar(moeda: Moedas): void {
  console.log(`Comprando com a moeda ${moeda}`);
}

comprar("CAD");
