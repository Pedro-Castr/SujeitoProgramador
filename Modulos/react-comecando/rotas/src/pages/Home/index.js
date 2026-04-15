import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Bem vindo a página HOME</h1>
      <span>Autor: Pedro Castro</span>
      <br />
      <Link to='/sobre'>Sobre</Link>
    </div>
  );
}

export default Home;