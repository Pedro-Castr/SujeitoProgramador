let primeiros = [1, 2, 3];

let numeros = [...primeiros, 7, 8, 9];
console.log(numeros);

let dadosInciais = {
  nome: "Pedro",
  sobrenome: "Castro",
};

let novosDados = {
  ...dadosInciais,
  cargo: "CEO",
  cidade: "Juiz de Fora",
};
console.log(novosDados);

function novoUsuario(info) {
  let data = {
    ...info,
    status: "ativo",
    inicio: "20/05/2025",
  };

  console.log(data);
}

novoUsuario({ nome: "Matheus", sobrenome: "Fraga", cargo: "dev" });
