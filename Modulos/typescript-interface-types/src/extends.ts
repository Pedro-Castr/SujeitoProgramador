interface JogoProps {
  readonly id: string;
  nome: string;
  descricao: string;
  plataforma: string[];
}

const minecraft: JogoProps = {
  id: "1",
  nome: "Minecraft",
  descricao: "Jogo quadrado de construção",
  plataforma: ["PC", "Playstation", "Xbox"],
};

console.log(minecraft);

interface DLC extends JogoProps {
  novoConteudo: string[];
}

const MinecraftDLC: DLC = {
  id: "2",
  nome: "Minecraft 1.22",
  descricao: "Jogo quadrado de construção",
  plataforma: ["PC"],
  novoConteudo: ["Novos blocos", "Novas ferramentas"],
};

console.log(MinecraftDLC);
