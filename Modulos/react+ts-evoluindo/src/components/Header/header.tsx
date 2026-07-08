import "./header.css";

interface HeaderProps {
  titulo: string;
}

export function Header({ titulo }: HeaderProps) {
  return (
    <header className="header">
      <h1 className=" title">{titulo}</h1>
    </header>
  );
}
