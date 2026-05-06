function convidados(...nomes) {
  console.log("Sejam bem vindos!");
  console.log(nomes);
}

convidados("Matheus", "Lucas", "Pedro");

function sorteador(...numeros) {
  console.log(numeros);

  const numeroGerado = Math.floor(Math.random() * numeros.length);
  console.log(numeros[numeroGerado]);
}

sorteador(1, 4, 6, 9, 31, 15);
