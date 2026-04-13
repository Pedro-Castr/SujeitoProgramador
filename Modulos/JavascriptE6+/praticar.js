// Verificador de Número Negativo, Positivo ou Zero
function verificaNumero(num) {
  if (num == 0) {
    return console.log("O número é igual a zero");
  } else if (num < 0) {
    return console.log("O número é negativo");
  } else {
    return console.log("O número é positivo");
  }
};

verificaNumero(8);

// Desafio da Verificação de Elemento em um Array
function verificaArray(array, num) {
  if (array.includes(num)) {
    console.log(`O número ${num} pertence ao array`);
  } else {
    console.log(`O número ${num} não pertence ao array`)
  }
}

const numeros = [3, 7, 8, 9, 41, 56];
verificaArray(numeros, 7);

// Encontrar o produto com Preço Igual a R$20 e filtrar Produtos com Preço Menor que R$8
const products = [
  { name: 'Maça', price: 2.5 },
  { name: 'Coca cola', price: 8 },
  { name: 'Guarana', price: 5 },
  { name: 'Chocolate', price: 20 }
];

products.map((item) => {
  let { name, price } = item;
  if (price === 20) {
    console.log(`O produto ${name} custa R$20`);
  };
});

let filtro = products.filter(p => p.price >= 8);
console.log(filtro);

// Exercício 01
const nums = [1, 2, 3];
const copiaNum = [...nums, 4];
console.log(copiaNum);

// Exercício 02
function somar(...array) {
  return array.reduce((total, num) => {
    return total + num;
  }, 0);
}

console.log(somar(1, 2, 3, 4));

// Exercício 03
const dobrar = (numero) => {
  console.log(numero * 2);
}

// Exercício 04
const nomes = ["pedro", "ana", "carlos"];
const nomesMaiusculo = nomes.map((nome) => nome.toUpperCase())
console.log(nomesMaiusculo);

// Exercício 05
const produtos = [
  { nome: "camisa", preco: 50 },
  { nome: "calça", preco: 100 }
];

const produtosDescontados = produtos.map((produto) => ({
  nome: produto.nome,
  preco: produto.preco * 0.90
}))
console.log(produtosDescontados);