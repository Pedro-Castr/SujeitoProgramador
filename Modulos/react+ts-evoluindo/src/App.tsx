export default function App() {
  return (
    <div>
      <h1>Meu Projeto</h1>
      <Aluno nome="Pedro Castro" idade={22} endereco="Rua dos Fodas" />
    </div>
  );
}

interface AlunoProps {
  nome: string;
  idade: number;
  endereco: string;
}

function Aluno({ nome, idade, endereco }: AlunoProps) {
  return (
    <>
      <h2>Seja bem vindo, {nome}!</h2>
      <p>
        Você tem {idade} anos e mora em {endereco}
      </p>
    </>
  );
}
