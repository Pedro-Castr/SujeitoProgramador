// Uma classe abstrata serve como um contrato a ser seguido, contendo assinatura de métodos que qualquer
// classe que herde essa classe abstrata precisa implementar

type DadosConta = {
  nome: string;
  numero: number;
  endereco: string;
};

abstract class ContaBanco {
  abstract abrirConta(dados: DadosConta): boolean;
}

class PessoaFisica extends ContaBanco {
  abrirConta(dados: DadosConta): boolean {
    console.log(`Nova conta criada com sucesso: ${dados.nome}`);
    return true;
  }
}

const pedro = new PessoaFisica();

pedro.abrirConta({
  nome: "Pedro Castro",
  numero: 776,
  endereco: "Rua Abstrata",
});
