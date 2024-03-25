let botao = document.getElementById("botao");
botao.addEventListener('mouseover', clicar)
botao.addEventListener('mouseout', sair)
let corpo = document.getElementById("corpo");

function clicar() {
    corpo.style.backgroundColor = 'red';
};

function sair() {
    corpo.style.backgroundColor = 'aquamarine';
}