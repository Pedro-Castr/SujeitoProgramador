interface TecnologiaProps {
  id: string;
  nome: string;
  descricao?: string;
}

interface NomesProps {
  tecnologia: TecnologiaProps[];
  descricao?: string;
}

let frontend: NomesProps = {
  tecnologia: [
    {
      id: "1",
      nome: "HTML",
      descricao: "Linguagem de marcação",
    },
    {
      id: "2",
      nome: "CSS",
      descricao: "Estilo em Cascata",
    },
    {
      id: "3",
      nome: "Javascript",
    },
  ],
  descricao: "tecnologias usadas no frontend",
};

console.log(frontend);
