import { useState } from "react";
import "./calculaIdade.css";

export default function CalculaIdade() {
  const [nome, setNome] = useState<string>("");
  const [nascimento, setNascimento] = useState<string>("");
  const [idade, setIdade] = useState<number | null>(null);

  function handleAge(nascimento: string) {
    const dataNascimento = new Date(nascimento);
    const hoje = new Date();

    const idade = hoje.getFullYear() - dataNascimento.getUTCFullYear();
    setIdade(idade);
  }

  return (
    <div className="calcula-idade">
      <h2>Vou adivinhar sua idade</h2>

      <section>
        <label htmlFor="nome">Digite seu nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="nascimento">Digite sua data de nascimento</label>
        <input
          type="date"
          id="nascimento"
          value={nascimento}
          onChange={(e) => setNascimento(e.target.value)}
        />

        <button onClick={() => handleAge(nascimento)}>Revelar</button>
      </section>

      {idade && (
        <p>
          {nome}, você tem {idade} anos
        </p>
      )}
    </div>
  );
}
