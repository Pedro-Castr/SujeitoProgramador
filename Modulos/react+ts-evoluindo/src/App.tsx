import { useState } from "react";

import { Header } from "./components/Header/header";
import { Aluno } from "./components/Aluno/aluno";
import { Footer } from "./components/Footer/footer";

interface UserProps {
  nome: string;
  cargo: string;
}

export default function App() {
  const [cor, setCor] = useState("");
  const [contador, setContador] = useState(0);
  const [user, setUser] = useState<UserProps>({
    nome: "Visitante",
    cargo: "",
  });

  function adicionar() {
    setContador((valorAtual) => valorAtual + 1);
  }

  function diminuir() {
    if (contador === 0) {
      return;
    }
    setContador((valorAtual) => valorAtual - 1);
  }

  function handleLogin() {
    setUser({
      nome: "Pedro Castro",
      cargo: "Dev",
    });
  }

  function handleLogout() {
    setUser({
      nome: "Visitante",
      cargo: "",
    });
  }

  return (
    <div style={{ backgroundColor: cor }}>
      <Header titulo="Curso React + TypeScript" />
      <Aluno nome="Pedro Castro" idade={22} endereco="Rua dos Fodas" />

      <div>
        <h2>Altere a cor do site!</h2>
        <input
          placeholder="Digite a cor aqui"
          value={cor}
          onChange={(e) => setCor(e.target.value)}
        />
      </div>

      <div>
        <h2>Contador com useState</h2>
        <button onClick={adicionar}>+</button> {contador}{" "}
        <button onClick={diminuir}>-</button>
      </div>

      <div>
        <h2>Utilizando useState</h2>
        <button onClick={handleLogin}>Entrar</button>
        <button onClick={handleLogout}>Sair</button>
        <p>Olá, {user.nome}</p>
        <strong>{user.cargo}</strong>
      </div>

      <Footer nome="Sujeito Programador" ano={2026} />
    </div>
  );
}
