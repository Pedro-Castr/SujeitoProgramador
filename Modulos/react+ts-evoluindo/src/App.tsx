import { Header } from "./components/Header/header";
import { Aluno } from "./components/Aluno/aluno";
import { Footer } from "./components/Footer/footer";

export default function App() {
  return (
    <div>
      <Header titulo="Curso React + TypeScript" />
      <Aluno nome="Pedro Castro" idade={22} endereco="Rua dos Fodas" />
      <Footer nome="Sujeito Programador" ano={2026} />
    </div>
  );
}
