const { execSync } = require("child_process");

function git(cmd) {
  return execSync(cmd, { encoding: "utf8" }).trim();
}

function formatarDataHora() {
  const agora = new Date();

  const dia = String(agora.getDate()).padStart(2, "0");
  const mes = String(agora.getMonth() + 1).padStart(2, "0");
  const ano = agora.getFullYear();

  const hora = String(agora.getHours()).padStart(2, "0");
  const minuto = String(agora.getMinutes()).padStart(2, "0");

  return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
}

function verificarRepo() {
  try {
    git("git rev-parse --is-inside-work-tree");
  } catch {
    throw new Error("Este diretório não é um repositório Git.");
  }
}

function obterArquivosAlterados() {
  const status = git("git status --porcelain");

  if (!status) return [];

  return status
    .split("\n")
    .map((linha) => linha.slice(3))
    .filter(Boolean);
}

try {
  verificarRepo();

  const arquivos = obterArquivosAlterados();

  if (arquivos.length === 0) {
    console.log("✔ Nenhuma alteração para commit.\n");
    process.exit();
  }

  const dataHora = formatarDataHora();
  const mensagem = `Estudos dia ${dataHora}`;

  console.log("📄 Arquivos alterados:", arquivos.length);
  console.log("📂 Lista de arquivos:");

  arquivos.forEach((arq) => {
    console.log(" -", arq);
  });

  console.log("\n📝 Mensagem do commit:");
  console.log(mensagem);

  console.log("\n📦 Adicionando arquivos...");
  git("git add .");

  console.log("📝 Criando commit...");
  git(`git commit -m "${mensagem}"`);

  console.log("🚀 Enviando para o repositório remoto...");
  git("git push origin HEAD");

  console.log("\n✅ Commit e push realizados com sucesso!\n");
} catch (error) {
  console.error("\n❌ Erro ao executar script:");
  console.error(error.message);
}
