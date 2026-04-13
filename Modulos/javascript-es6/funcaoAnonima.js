function somar(a, b) {
  let total = a + b;
  return console.log(total);
};

somar(10, 30);

let subtrair = (a, b) => {
  let total = a - b;
  return console.log(total);
};

subtrair(10, 5);

let numeros = [4, 6, 71, 3];

numeros.map((item) => {
  console.log(item);
})