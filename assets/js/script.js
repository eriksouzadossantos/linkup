/* DEIXA O MENU ATIVO NO MOBILE */

const menuBtn = document.querySelector("header .menu button");
const navUl = document.querySelector("header nav ul");

menuBtn.addEventListener("click", () => {
    navUl.classList.toggle("active");
});


/* PARTE DE CONTATO DO WHATSAPP */

function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5519993050489';

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`;

    window.open(url, '_blank');
}