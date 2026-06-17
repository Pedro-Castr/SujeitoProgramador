class Loja {
  // Atributos
  nome: string;
  categoria: string;

  // Método Construtor
  constructor(nome: string, categoria: string) {
    ((this.nome = nome), (this.categoria = categoria));
  }

  // Métodos
  criarLoja(): void {
    console.log(`Loja ${this.nome} criada com sucesso!`);
  }

  emitirPedido(mesa: number, ...pedidos: string[]): string {
    pedidos.map((pedido) => {
      console.log(`Saindo novo pedido: ${pedido}`);
    });

    return `Pedido da mesa número ${mesa}`;
  }
}

const blueBurger = new Loja("Blue Burger", "Hamburgueria");
console.log(blueBurger);
blueBurger.criarLoja();

const redPizza = new Loja("Red Pizza", "Pizzaria");
console.log(redPizza);
console.log(
  redPizza.emitirPedido(
    12,
    "Pizza de catupiri",
    "Pizza de calabresa",
    "Pizza de frango",
  ),
);
