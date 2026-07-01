// Só é chamado quando nosso método é chamado em algum local
export function verificaPessoa(idade: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const metodoOriginal = descriptor.value;

    descriptor.value = function () {
      if (idade < 18) {
        console.log(`Pessoa menor de idade`);
      } else {
        console.log(`Pessoa maior de idade`);
        return metodoOriginal.apply(this);
      }
    };
  };
}
