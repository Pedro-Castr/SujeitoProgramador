interface AlunoProps {
  nome: string;
  idade: number;
  endereco: string;
}

export function Aluno({ nome, idade, endereco }: AlunoProps) {
  return (
    <>
      <h2>Seja bem vindo, {nome}!</h2>
      <p>
        Você tem {idade} anos e mora em {endereco}
      </p>
    </>
  );
}
