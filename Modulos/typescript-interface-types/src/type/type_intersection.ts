type Info = {
  id: string;
  nome: string;
  descricao?: string;
};

type Categoria = {
  slug: string;
  quantidadeProduto: number;
};

const produto1: Info = {
  id: "1",
  nome: "Computador",
  descricao: "intel I7",
};

const categoria1: Categoria = {
  slug: "hardware",
  quantidadeProduto: 3,
};

type ProdutoInfo = Info & Categoria;

const novoProtudo: ProdutoInfo = {
  id: "2",
  nome: "Teclado RGB",
  slug: "teclado-mecanico",
  quantidadeProduto: 5,
};

console.log(produto1);
console.log(categoria1);
console.log(novoProtudo);
