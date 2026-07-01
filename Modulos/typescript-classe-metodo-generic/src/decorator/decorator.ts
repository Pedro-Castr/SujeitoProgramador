/* 
Um decorator é uma função que é executada sobre uma classe, método, propriedade ou parâmetro
para adicionar, modificar ou registrar comportamentos sem alterar diretamente o código original.
*/

// target: recebe o construtor da nossa classe
function log(target: any) {
  console.log("Sistema online");
}

// Função que vai retornar a criação do decorator (padrão factory)
function logInfo(mensagem: string) {
  return (target: any) => {
    console.log(`${mensagem}, ${target}`);
  };
}

@logInfo("Servidor está rodando")
class Sistema {}

function setIpServidor(ip: string) {
  return (target: any) => {
    return class extends target {
      ip = ip;
    };
  };
}

@setIpServidor("192.168.50.30")
class Servidor {}

const servidor1 = new Servidor();
console.log(servidor1);
