/* 
  Abaixo de 17: Muito abaixo do peso
  Entre 17 e 18,49: Abaixo do peso
  Entre 18,5 e 24,99: Peso normal
  Entre 25 e 29,99: Acima do peso

  IMC = peso / (altura * altura)
*/

var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
  event.preventDefault();

  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  imc = peso / (altura * altura);
  resultado = document.getElementById("resultado");
  resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2);

  if (imc < 17) {
    resultado.innerHTML += "<br/> Cuidado, você está muito abaixo do peso";
  } else if (imc >= 17 && imc < 18.5) {
    resultado.innerHTML += "<br/> Você está abaixo do peso!";
  } else if (imc >= 18.5 && imc < 24.5) {
    resultado.innerHTML += "<br/> Parabêns, você está no peso ideal";
  } else if (imc >= 24.5 && imc < 30) {
    resultado.innerHTML += "<br/> Você está acima do peso!";
  } else {
    resultado.innerHTML += "<br/> Cuidado, você está muito acima do peso";
  }
}
