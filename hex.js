const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const button = document.getElementById('btn')
const TextColor = document.querySelector(".color")


button.addEventListener('click', function clicar() {
    let HexColor = "#"
    for(let i = 0; i <= 6; i++) {
        HexColor  += colors[NumberContador()] //Faz os numeros ou letras se agruparem
        document.body.style.backgroundColor = HexColor 
    TextColor.textContent = HexColor 
    }
})
function NumberContador() {
    return Math.floor(Math.random() * colors.length)
}

