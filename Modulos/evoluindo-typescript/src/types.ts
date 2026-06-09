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

// type array
let somenteNumeros: number[];
somenteNumeros = [4, 56, 87, 13];
somenteNumeros.push(33);
console.log(somenteNumeros);

let somenteString: Array<string>;
somenteString = ["Pedro", "Luiza", "Matheus"];
somenteString.push("Sujeito Programador");
console.log(somenteString);

// let arrayVariado: (string | number)[];
let arrayVariado: Array<string | number>;
arrayVariado = [32, "Pedro", 12, "Luiza"];
console.log(arrayVariado);

// tuplas: especifica a quantidade de itens e qual o tipo de cada um. Não tem no JS, somente no TS
let aluno: [string, number];
aluno = ["Pedro Castro", 21];
console.log(aluno);

// type object
let novoUsuario: object = {
  nome: "Pedro Castro",
  email: "pedro@gmail.com",
  idade: 21,
};
console.log(novoUsuario);
