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