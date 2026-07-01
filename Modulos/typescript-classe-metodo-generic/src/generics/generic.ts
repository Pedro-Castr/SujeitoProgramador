// Generics permite criar estruturas que serão adaptáveis a vários tipos de dados.
// Ajudando a reaproveitar melhor nosso código e deixá-lo mais flexível.

function repositorio<T extends number | string>() {
  let dados: T;

  function getDados() {
    return dados;
  }

  function setDados(novoDado: T) {
    dados = novoDado;
  }

  return { getDados, setDados };
}

const repo1 = repositorio<string>();
repo1.setDados("43");
console.log(repo1.getDados());

const repo2 = repositorio<number>();
repo2.setDados(34);
console.log(repo2.getDados());
