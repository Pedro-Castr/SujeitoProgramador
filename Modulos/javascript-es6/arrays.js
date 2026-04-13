// Desconstruindo Objetos

let pessoa = {
  nome: "Pedro",
  sobrenome: "Castro",
  empresa: "Workdone",
  cargo: "CEO"
}

console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa.cargo);

const { nome, cargo } = pessoa;

console.log(nome);
console.log(cargo);

// Desconstruindo Arrays

let carros = ["Porsche", "McLaren", "Ferrari"];
console.log(carros);

let { 0:carro } = carros;
console.log(carro);

let cidades = ["Muriaé", "Juiz de Fora", "Rio de Janeiro"];

let [primeiraCidade, segundaCidade, terceiraCidade] = cidades;

console.log(primeiraCidade);
console.log(segundaCidade);