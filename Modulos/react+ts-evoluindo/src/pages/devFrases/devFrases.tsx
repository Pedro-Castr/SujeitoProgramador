import { useState } from "react";
import logoDevArt from "../../assets/logoDevFrases.png";
import "./devFrases.css";

interface FraseProps {
  id: number;
  nome: string;
  frases: Array<string>;
}

export default function DevFrases() {
  const [textFrase, setTextFrase] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const allFrases: FraseProps[] = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "O sucesso é a soma de pequenos esforços repetidos todos os dias.",
        "Acredite no seu potencial e continue avançando.",
        "Grandes conquistas começam com uma única decisão: não desistir.",
        "Cada desafio é uma oportunidade para crescer.",
        "Você é mais forte do que imagina.",
        "Persistência hoje é resultado amanhã.",
        "Não espere o momento perfeito, faça o momento valer a pena.",
        "Seja melhor do que você foi ontem.",
        "O único limite para o seu crescimento é aquele que você aceita.",
        "Nunca desista dos seus sonhos. Continue em frente.",
      ],
    },
    {
      id: 2,
      nome: "Bom Dia",
      frases: [
        "Bom dia! Que hoje seja um dia repleto de conquistas e alegria.",
        "Acorde com gratidão e faça deste dia uma nova oportunidade para crescer.",
        "Que seu dia comece com paz, esperança e muita energia positiva.",
        "Bom dia! Sorria, respire fundo e aproveite cada momento.",
        "Hoje é um novo capítulo da sua história. Faça valer a pena!",
        "Que o seu café seja forte, sua fé ainda mais e seu dia maravilhoso.",
        "Bom dia! Que não faltem motivos para sorrir e seguir em frente.",
        "Cada amanhecer traz novas possibilidades. Aproveite as suas!",
        "Que o sol ilumine seus caminhos e que seu coração transborde felicidade.",
        "Bom dia! Desejo que seu dia seja leve, produtivo e cheio de boas surpresas.",
      ],
    },
    {
      id: 3,
      nome: "Citação",
      frases: [
        "A imaginação é mais importante que o conhecimento. — Albert Einstein",
        "Penso, logo existo. — René Descartes",
        "A vida é o que acontece enquanto você está ocupado fazendo outros planos. — John Lennon",
        "O único lugar onde o sucesso vem antes do trabalho é no dicionário. — Vidal Sassoon",
        "Conhece-te a ti mesmo. — Sócrates",
        "A persistência é o caminho do êxito. — Charles Chaplin",
        "Não importa a velocidade com que você vai, desde que não pare. — Confúcio",
        "Faça ou não faça. Tentativa não há. — Yoda",
        "A educação é a arma mais poderosa que você pode usar para mudar o mundo. — Nelson Mandela",
        "Seja a mudança que você deseja ver no mundo. — Frase frequentemente atribuída a Mahatma Gandhi",
      ],
    },
  ];

  function generateFrase(): void {
    const randomNumber = Math.floor(
      Math.random() * allFrases[selectedCategory].frases.length,
    );

    setTextFrase(`"${allFrases[selectedCategory].frases[randomNumber]}"`);
  }

  return (
    <div className="devFrases">
      <img src={logoDevArt} alt="Logo dev Frases" />

      <h2 className="title">Categorias</h2>
      <section className="category-area">
        {allFrases.map((item, index) => (
          <button
            key={index}
            className="category-button"
            style={{
              borderWidth:
                item.nome === allFrases[selectedCategory].nome ? 2 : 0,
            }}
            onClick={() => setSelectedCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className="btn-frase" onClick={generateFrase}>
        Gerar Frase
      </button>

      {textFrase !== "" && <p className="texto-frase">{textFrase}</p>}
    </div>
  );
}
