// geralmente usado para valores que podem vir ou não. nulo ocupa espaço na memória
let nome: string | null;

// é quando nada é definido
let nomeUser;
console.log(nomeUser); // undefined

// type unknown: serve para quando não sabemos o tipo que vamos receber
let total: unknown;

total = 100;
total = "Pedro";
total = {
  valor: 100,
};
