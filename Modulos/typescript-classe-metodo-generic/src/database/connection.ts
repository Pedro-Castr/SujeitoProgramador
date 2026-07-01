type Connection = {
  ip: string;
  name: string;
};

export function connection(info: Connection): boolean {
  console.log(`Conexão realizada com sucesso! IP: ${info.ip}`);
  return true;
}

export function statusConnection(): void {
  console.log("Servidor no ar!");
}
