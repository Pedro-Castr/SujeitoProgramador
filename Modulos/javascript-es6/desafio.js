const produtos = ["Computador", "Telefone", "Mouse", "Teclado"];

// Exibe a lista
console.log(`Items da lista: ${produtos}`);

// Retorna quantidade
console.log(`Essa lista possui ${produtos.length} itens`);

// Remover Mouse
produtos.splice(2, 1);
console.log(`Lista atualizada após exclusão do mouse: ${produtos}`);

// Buscar produtos
const busca = produtos.find((item) => item === "Computador");

if (busca) {
  console.log("Item encontrado na lista");
} else {
  console.log("Item não encontrado!");
}

// remover segundo item
produtos.splice(1, 1);
console.log("Removendo segundo item:", produtos);

let numeros = [1, 3, 5, 7, 0, 9];

// Ordenar
numeros.sort((a, b) => a - b);
console.log("Ordenado:", numeros);

// Remover primeiro
numeros.shift();
console.log("Sem primeiro:", numeros);

// Inverter
numeros.reverse();
console.log("Invertido:", numeros);

let hoje = "20/07/2019";

// Separar
let [dia, mes, ano] = hoje.split("/");

console.log("Dia:", dia);
console.log("Mês:", mes);
console.log("Ano:", ano);
