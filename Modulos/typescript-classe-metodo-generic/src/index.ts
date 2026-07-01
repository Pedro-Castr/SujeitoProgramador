import { connection, statusConnection } from "./database/connection";
import aplicativo from "./database/aplicativo";

function acessarSistema() {
  connection({
    ip: "192.168.54.10",
    name: "PostgresSQL",
  });
  statusConnection();
  aplicativo();
}

acessarSistema();
