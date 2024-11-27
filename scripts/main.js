const restart = document.querySelector('#restart')
const score = document.querySelector('#score')
const score1 = document.querySelector('#score1')
const score2 = document.querySelector('#score2')
const quit = document.querySelector('#quit')
const nextRound = document.querySelector('#nextRound')
const modal = document.querySelector('.modal')
const turno = document.querySelector('#turnoDe')
const boardItem = document.querySelectorAll('.board_item')
let playerOne = true;
for (let i = 0; i < boardItem.length; i++) {
   boardItem[i].addEventListener('click', jugadorQueMueve);
}
function jugadorQueMueve(e) {
    let movimiento = e.target.innerHTML;
    console.log(movimiento);
    if (!movimiento.length) {
        e.target.innerHTML = playerOne? `<svg class="icon cross">
            <use xlink:href="./icons/icon-x.svg#icon-x"></use>
          </svg>` : `<svg class="icon circle">
            <use xlink:href="./icons/icon-o.svg#icon-o"></use>
          </svg>`;
        playerOne = !playerOne;
        
            combinacionesAGanar(0, 1, 2);
            combinacionesAGanar(3, 4, 5);
            combinacionesAGanar(6, 7, 8);
            combinacionesAGanar(0, 3, 6);
            combinacionesAGanar(1, 4, 7);
            combinacionesAGanar(2, 5, 8);
            combinacionesAGanar(0, 4, 8);
            combinacionesAGanar(2, 4, 6);
    }
}
function combinacionesAGanar(columna1, columna2, columna3) {
    if (boardItem[columna1].innerHTML.length && 
        boardItem[columna1].innerHTML === boardItem[columna2].innerHTML && 
        boardItem[columna2].innerHTML === boardItem[columna3].innerHTML) 
        {
        ganador();
    }
}
function ganador() {
    modal.classList.toggle('d-none') 
}

quit.addEventListener('click', function(){
    ganador()
    limpiarTablero()
    score.innerText = 0
    score1.innerText = 0
    score2.innerText = 0
})

function limpiarTablero() {
    for (let i = 0; i < boardItem.length; i++) {
        boardItem[i].innerText = boardItem[i];

    }
}

// limpiarTablero()
restart.addEventListener('click', function(){
    limpiarTablero()
    score.innerText = 0
    score1.innerText = 0
    score2.innerText = 0
})
nextRound.addEventListener('click', function(){
    modal.classList.add('d-none')
    limpiarTablero()
})