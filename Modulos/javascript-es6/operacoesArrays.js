// map = Utilizado para percorrer um array
let lista = ["Matheus", "Pedro", "Luiza"];

lista.map((item, index) => {
  console.log(`Passando o index ${index} de valor ${item}`);
});

// reduce = busca reduzir um array
let numeros = [4, 7, 90, 2];

let total = numeros.reduce((acumulador, numero, indice, original) => {
  console.log("-----------------------------------------------------");
  console.log(`O total do array é ${acumulador}`);
  console.log(`O número da vez é ${numero} e seu índice é ${indice}`);

  return acumulador += numero;
});

console.log(`Total do reduce: ${total}`);

// find = faz uma busca pelo array e retorna o primeiro item
let listagem = [1, 4, "Pedro", 7, "Luiza"];

let busca = listagem.find((item) => {
  if (item === "Pedro") {
    return console.log(`Item ${item} encontrado com sucesso`);
  }
});

// filter = 
let palavras = ["Matheus", "Pedro", "Ana", "Luiza", "Larissa"];

let resultado = palavras.filter((item) => {
  return item.length <=4;
});

console.log(resultado);