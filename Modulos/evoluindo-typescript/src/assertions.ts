// assertions são a afirmação de um tipo, funciona bem quando consumido APIs externas
let statusAtual: unknown = 1;
let mudaStatus: number = 0;

// afirma que o statusAtual é de fato um número
mudaStatus = <number>statusAtual;
mudaStatus = statusAtual as number;
console.log(mudaStatus);
console.log(typeof mudaStatus);
