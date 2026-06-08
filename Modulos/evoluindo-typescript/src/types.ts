// type string
let tecnologia: string;
tecnologia = "JavaScript";
console.log(tecnologia);

// type number = int, float, hex, binary
let valor1: number = 56;
let valor2: number = 32.85;
console.log(valor1 + valor2);

// union type = permite que uma variável assuma 2 ou mais tipos definidos
let userId: number | string = "123";
console.log(userId);
console.log(typeof userId);

// type any = pode assumir qualquer tipo
let preco;
preco = 54;
preco = true;
preco = "Pedro";

// type boolean = aceita valores de verdadeiro ou falso
let autenticado: boolean = false;
console.log(autenticado);
