function login(username: string, logado: boolean): boolean {
  if (logado) {
    let message = `Bem vindo, ${username}!`;
    console.log(message);
    return true;
  } else {
    let message = `Usuário não logado!`;
    console.log(message);
    return false;
  }
}
console.log(login("Pedro Castro", false));

function soma(n1: number, n2: number): number {
  return n1 + n2;
}

let n1: number = 10;
let n2: number = 23;
console.log(soma(n1, n2));

const retornoAPI = (url: string): void => {
  console.log(`URL da API: ${url}`);
};

retornoAPI("https://sujeitoprogramador.com");

function cadastro(
  email: string,
  senha: string,
  nome = "Aluno", // adiciona um valor padrão
  idade?: number, // torna a variável opcional
): void {
  let data = { email, senha, nome, idade };
  console.log(data);
}

cadastro("pedro@gmail.com", "123abc", "Pedro Castro", 21);

function totalVendas(...vendas: number[]): void {
  const quantidadeVendas = vendas.length;
  console.log(`Você fez ${quantidadeVendas} vendas hoje`);
}

totalVendas(3, 6, 2, 67);
