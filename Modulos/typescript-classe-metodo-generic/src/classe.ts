class Loja {
  // Atributos
  nome: string;
  categoria: string;

  // Método Construtor
  constructor(nome: string, categoria: string) {
    ((this.nome = nome), (this.categoria = categoria));
  }
}

const blueBurger = new Loja("Blue Burger", "Hamburgueria");
console.log(blueBurger);
