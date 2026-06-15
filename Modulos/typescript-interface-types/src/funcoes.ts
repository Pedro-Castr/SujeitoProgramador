interface CursoProps {
  id: string;
  nome: string;
  preco: number;
  promocao: (preco: number) => void;
}

function mostraPromocao(preco: number): void {
  console.log(`Promoção no curso por apenas R$${preco}`);
}

const novoCurso: CursoProps = {
  id: "1",
  nome: "Curso.dev",
  preco: 2200,
  promocao: mostraPromocao,
};

console.log(novoCurso.promocao(1800));
