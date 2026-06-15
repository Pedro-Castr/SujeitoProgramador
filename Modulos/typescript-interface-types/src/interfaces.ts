interface LojaProps {
  nome: string;
  endereco: string;
  status: boolean;
}

const BurguerK: LojaProps = {
  nome: "BK",
  endereco: "Rua X",
  status: true,
};

console.log(BurguerK);

function novaLoja({ nome, endereco, status }: LojaProps): void {
  console.log(`Loja ${nome} criada com sucesso!`);
  console.log(`Endenreço da Loja: ${endereco}`);
  console.log(`Status: ${status}`);
}

novaLoja({
  nome: "Subway",
  endereco: "Rua tal",
  status: false,
});
