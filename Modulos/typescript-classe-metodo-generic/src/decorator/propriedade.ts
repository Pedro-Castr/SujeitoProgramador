function validaNome(tamanho: number) {
  // target: construtor, key: propriedade
  return (target: any, key: string) => {
    let valor = target[key];

    const getter = () => valor;

    const setter = (value: string) => {
      if (value === "") {
        console.log("O nome precisa ser preenchido");
      } else if (value.length < tamanho) {
        console.log(`O tamanho do nome precisa ser maior que ${tamanho}`);
      } else {
        valor = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Jogo {
  @validaNome(5)
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

const jogo1 = new Jogo("");
console.log(`Jogo 1: ${jogo1.nome}`);

const jogo2 = new Jogo("GTA");
console.log(`Jogo 2: ${jogo2.nome}`);

const jogo3 = new Jogo("Minecraft");
console.log(`Jogo 3: ${jogo3.nome}`);
