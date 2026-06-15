interface CadastroProps {
  nome?: string;
  email: string;
  status: boolean;
}

const novoUsuario: CadastroProps = {
  email: "pedro@gmail.com",
  status: true,
};

console.log(novoUsuario);

function newUser({ email, status }: CadastroProps): void {
  console.log(`O email ${email} está como ${status}`);
}

newUser({
  email: "pedro@email.com",
  status: false,
});
