//toda vez que eu clicar no botão "click me" o fundo da knha pagina ira mudar de cor
//e toda vez que mudar de cor ao clicar no botao ira modificar o RGB escrito na tela
//array, ById, math.floor, math.random(), document.body.style.backgroundColor, addeventlistener, array.lenght
//cores utilizadas #F15025, red, Rgba(133,122,200), #F1f5f8, green
//começams com puxar o botão para dentro do js
//em seguida adicionar um eventListener nele
//apos isso criar array com as cores adicionadas 

let botao = document.getElementById('btn');
let cores = ['#F15025', 'red', 'Rgba(133,122,200)', '#F1f5f8', 'green'];
let colorText = document.querySelector('.color');

botao.addEventListener("click", function(){
    const NumberRandomAdd = RandomNumber();

    document.body.style.backgroundColor = cores[NumberRandomAdd];
    colorText.textContent = cores[NumberRandomAdd];
});
function RandomNumber() {
    return Math.floor(Math.random() * cores.length);

}

