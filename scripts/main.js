const restart = document.querySelector('#restart')
const scoreX = document.querySelector('#score')
const scoreTies = document.querySelector('#score1')
const scoreO = document.querySelector('#score2')
const quit = document.querySelector('#quit')
const nextRound = document.querySelector('#nextRound')
const modal = document.querySelector('.modal')
const turn = document.querySelector('.turn .icon')
const boardItem = document.querySelectorAll('.board_item')
scoreO.innerHTML = 0;
scoreX.innerHTML = 0;
scoreTies.innerHTML = 0;
let playerOne = 0;
let score = { X: 0, O: 0, ties: 0 }
let pc = 1;
let juegoActivo = false ;
let juegoEnPause = false ;
turn.innerHTML =  `<use xlink:href="./icons/icon-x.svg#icon-x"></use>`

for (let i = 0; i < 9; i++) {
  boardItem[i].addEventListener('click', jugadorQueMueve);
}
function jugadorQueMueve(e) {
  let movimiento = e.target.innerHTML;
  if (!movimiento.length && !juegoEnPause) {
    juegoActivo = true;
    e.target.innerHTML = playerOne = `<svg class="icon cross">
            <use xlink:href="./icons/icon-x.svg#icon-x"></use>
          </svg>`
    playerOne = 0;
    turn.innerHTML = `<use xlink:href="./icons/icon-o.svg#icon-o"></use>`
    combinacionesAGanar(0, 1, 2, playerOne),
    combinacionesAGanar(3, 4, 5, playerOne),
    combinacionesAGanar(6, 7, 8, playerOne),
    combinacionesAGanar(0, 3, 6, playerOne),
    combinacionesAGanar(1, 4, 7, playerOne),
    combinacionesAGanar(2, 5, 8, playerOne),
    combinacionesAGanar(0, 4, 8, playerOne),
    combinacionesAGanar(2, 4, 6, playerOne)
  }
  setTimeout(() => {
    let nuevoArray = Array.from(boardItem).filter(celdas => !celdas.innerHTML.length);
    if (nuevoArray.length > 1 && !juegoEnPause) {
      juegoActivo = true;
      let celdaRandom = nuevoArray[Math.floor(Math.random() * nuevoArray.length)];
      celdaRandom.innerHTML = `<svg class="icon circle"><use xlink:href="./icons/icon-o.svg#icon-o"></use></svg>`;
      pc = 1;
      turn.innerHTML = `<use xlink:href="./icons/icon-x.svg#icon-x"></use>`
        combinacionesAGanar(0, 1, 2, pc),
        combinacionesAGanar(3, 4, 5, pc),
        combinacionesAGanar(6, 7, 8, pc),
        combinacionesAGanar(0, 3, 6, pc),
        combinacionesAGanar(1, 4, 7, pc),
        combinacionesAGanar(2, 5, 8, pc),
        combinacionesAGanar(0, 4, 8, pc),
        combinacionesAGanar(2, 4, 6, pc)
    }else if (nuevoArray.length === 0 && juegoEnPause === false) {
       empate()
       turn.innerHTML = `<use xlink:href="./icons/icon-x.svg#icon-x"></use>`
     }
  }, "400");
}
function combinacionesAGanar(celda1, celda2, celda3, ganador) {
  if (boardItem[celda1].innerHTML.length && boardItem[celda1].innerHTML === boardItem[celda2].innerHTML && boardItem[celda2].innerHTML === boardItem[celda3].innerHTML) {
    ganadorModal(ganador);
    return true
  }
}
function ganadorModal(modalElGanador) {
  modal.style = ` display:block !important;
                  place-content: center !important;`
  if (modalElGanador === 0) {
    document.querySelector('.modal h6').textContent = "YOU WON!"; 
    document.querySelector('.modal h2').textContent = "TAKES THE ROUND"; 
    document.querySelector('#winner').innerHTML = `<use xlink:href="./icons/icon-x.svg#icon-x"></use>`
    score.X++;
    updateScores();
    juegoEnPause = true
  } else if (modalElGanador === 1) {
    document.querySelector('.modal h6').textContent = "YOU WON!"; 
    document.querySelector('.modal h2').textContent = "TAKES THE ROUND"; 
    document.querySelector('#winner').innerHTML = `<svg class="icon circle"><use xlink:href="./icons/icon-o.svg#icon-o"></use></svg>`
    score.O++;
    updateScores();
  }
}
function empate() {
    modal.style = ` display:block !important;
                    place-content: center !important;`
    document.querySelector('.modal h6').textContent = "IT'S A TIE!"; 
    document.querySelector('#empates').innerHTML = ` <div class="d-flex gap-1 players">
        <svg class="icon ">
          <use xlink:href="./icons/icon-x.svg#icon-x"></use>
        </svg>
        <svg class="icon ">
          <use xlink:href="./icons/icon-o.svg#icon-o"></use>
        </svg>
      </div>`; 
    score.ties++;
    updateScores()
  }
quit.addEventListener('click', () => {
  modal.style = " display:none !important;"
  limpiarTablero()
  scoreX.innerText = 0
  scoreTies.innerText = 0
  scoreO.innerText = 0
  score = { X: 0, O: 0, ties: 0 }
  juegoActivo = false
  juegoEnPause = false
})
function limpiarTablero() {
  boardItem.forEach((element) => {
    element.innerHTML = ""
  })
}
limpiarTablero()
restart.addEventListener('click', function () {
  limpiarTablero()
})
nextRound.addEventListener('click', () => {
  modal.style = " display:none !important;"
  limpiarTablero()
  turn.innerHTML =  `<use xlink:href="./icons/icon-x.svg#icon-x"></use>`
  juegoActivo = false
  juegoEnPause = false
})
const updateScores = () => {
  scoreX.innerHTML = score.X;
  scoreO.innerHTML = score.O;
  scoreTies.innerHTML = score.ties;
};