var area = document.getElementById('area');

function entrar() {
  var nome = prompt("Digite seu nome")

  if (nome === '' || nome === null) {
    alert("Ops! Algo deu errado :/")
    area.innerHTML = "Clique no botão"
  } else {
    area.innerHTML = "Usuário logado: " + nome + " " 

    let botaoSair = document.createElement("button")
    botaoSair.innerText = "Sair da conta"
    botaoSair.onclick = sair
    area.appendChild(botaoSair)
  }
}

function sair() {
  alert("Até mais!")
  area.innerHTML = "Você saiu"
}

function mediaAluno(nota1, nota2) {
  var media = (nota1 + nota2) / 2

  if (media >= 7) {
    console.log("Aluno aprovado com a média " + media)
  } else {
    console.log("Aluno reprovado com a média " + media)
  }
}

function mensagemAluno(nome, curso) {
  var mensagem = "Seja bem vindo ao curso de " + curso + ", " + nome
  console.log(mensagem)
}