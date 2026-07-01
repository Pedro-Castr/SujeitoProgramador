interface novoProduto<V extends number | string> {
  nome: string;
  preco: V;

  formatar(valor: V): string;
}

const arroz: novoProduto<number> = {
  nome: "Arroz Branco",
  preco: 30,
  formatar(valor: number): string {
    let valorFormatado = valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return valorFormatado;
  },
};
console.log(arroz);
console.log(arroz.formatar(30));
