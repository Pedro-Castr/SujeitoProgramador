const { execSync } = require("child_process");

function formatarDataHora() {
  const agora = new Date();

  const dia = String(agora.getDate()).padStart(2, "0");
  const mes = String(agora.getMonth() + 1).padStart(2, "0");
  const ano = agora.getFullYear();

  const hora = String(agora.getHours()).padStart(2, "0");
  const minuto = String(agora.getMinutes()).padStart(2, "0");

  return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
}

try {
  const status = execSync("git status --porcelain").toString();

  if (!status) {
    console.log("Nenhuma alteração para commit.");
    process.exit();
  }

  const dataHora = formatarDataHora();

  execSync("git add .", { stdio: "inherit" });
  execSync(`git commit -m "Estudos dia ${dataHora}"`, { stdio: "inherit" });
  execSync("git push origin HEAD", { stdio: "inherit" });

  console.log("Commit e push realizados com sucesso 🚀");
} catch (error) {
  console.error("Erro ao executar script:", error.message);
}
