import { useState } from "react";

export default function RenderizacaoCondicional() {
  const [signed, setSigned] = useState(false);

  return (
    <div>
      {signed ? (
        <h1>Bem vindo, Pedro Castro!</h1>
      ) : (
        <h1>Nenhum Usuário Logado</h1>
      )}

      {signed && <h3>Você tem 22 anos</h3>}

      <button onClick={() => setSigned(true)}>Logar</button>
    </div>
  );
}
