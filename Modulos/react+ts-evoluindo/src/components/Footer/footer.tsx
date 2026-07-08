import "./footer.css";

interface FooterProps {
  nome: string;
  ano: number;
}

export function Footer({ nome, ano }: FooterProps) {
  return (
    <footer>
      <h3>
        Todos os Direitos reservados - <span>{nome}</span> - {ano}
      </h3>
    </footer>
  );
}
