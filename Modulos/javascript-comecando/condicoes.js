function pedir() {
  var valor = prompt("Faça seu pedido:");

  switch (Number(valor)) {
    case 1:
      alert("Você escolheu suco!");
      break;
    case 2:
      alert("Você escolheu Ãgua Gelada!");
      break;
    case 3:
      alert("Você escolheu Sorvete!");
      break;
    case 4:
      alert("Você chamou o garçom!");
      break;
    default:
      alert("Escolha um valor válido!");
  }
}

var nome = "Pedro";
var userOnline = true;

if (userOnline == true) {
  console.log("Usuário online");
} else if (nome == "Pedro") {
  console.log("Bem vindo, Pedro");
} else {
  console.log("Usuário offline");
}

var num = 10;

num === 10 ? console.log("o valor é 10") : console.log("o valor não é 10");
