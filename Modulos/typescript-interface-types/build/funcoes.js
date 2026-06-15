"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostraPromocao(preco) {
    console.log(`Promoção no curso por apenas R$${preco}`);
}
const novoCurso = {
    id: "1",
    nome: "Curso.dev",
    preco: 2200,
    promocao: mostraPromocao,
};
console.log(novoCurso.promocao(1800));
//# sourceMappingURL=funcoes.js.map