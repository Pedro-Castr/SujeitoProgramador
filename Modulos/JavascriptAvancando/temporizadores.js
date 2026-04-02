// setInterval = Exetuta uma ação inúmeras vezes dentro de um intervalo, pode ser parado se atrelado a uma variável
function acao() {
  document.writeln("Executando... <br/>");
}
setInterval(acao, 1000);

// setTimeOut = Executa apenas uma vez dentro de um tempo definido
function acao2() {
  document.writeln("Timeout executado!");
}
setTimeout(acao2, 5000);