"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const novoUsuario = {
    email: "pedro@gmail.com",
    status: true,
};
console.log(novoUsuario);
function newUser({ email, status }) {
    console.log(`O email ${email} está como ${status}`);
}
newUser({
    email: "pedro@email.com",
    status: false,
});
//# sourceMappingURL=opcional.js.map