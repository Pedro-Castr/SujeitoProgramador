function megasena(num) {
  if (num < 6 || num > 9) {
    console.log("O número precisa estar entre 6 e 9!");
    return [];
  } else {
    const numeros = [];
    do {
      let sorteado = Math.floor(Math.random() * 60);
      if (!numeros.includes(sorteado)) {
        numeros.push(sorteado);
      }
    } while (numeros.length < num);

    console.log(`Os números sorteados foram: ${numeros}`);
  }
}

megasena(9);
