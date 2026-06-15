interface ProdutoProps {
  readonly id: string;
  nome: string;
  descricao: string;
}

let produto1: ProdutoProps = {
  id: "1",
  nome: "Shampoo",
  descricao: "Shampoo para cabelos secos da elseve",
};

// produto1.id = "123";
produto1.descricao = "descricao alterada";
console.log(produto1);
