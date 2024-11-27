const restart = document.querySelector('#restart')
const score = document.querySelector('#score')
const score1 = document.querySelector('#score1')
const score2 = document.querySelector('#score2')
const quit = document.querySelector('#quit')
const nextRound = document.querySelector('#nextRound')
const modal = document.querySelector('.modal')
const turno = document.querySelector('.turn')
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
function combinacionesAGanar(celda1, celda2, celda3) {
    if (boardItem[celda1].innerHTML.length && 
        boardItem[celda1].innerHTML === boardItem[celda2].innerHTML && 
        boardItem[celda2].innerHTML === boardItem[celda3].innerHTML) 
        {
        mensajeModal();
    }
}
function mensajeModal() {
    if (boardItem === true) {
        ganadorModal()
    }else{
        modal.classList.toggle('d-none')
    }
    
}
mensajeModal()

function ganadorModal() {
    let link = ""
    if (boardItem === false) {
        link = "./icons/icon-x.svg#icon-x"
    }else{
        link = "./icons/icon-o.svg#icon-o"
    }
        modal.innerHTML = ""
        let modalX = `<div class="py-4 w-100 modal-content">
      <h6 class="text-center text-white">YOU WON!</h6>
      <div class="d-flex align-items-center gap-3 justify-content-center">
        <svg class="winner" id="winner">
          <!-- Change the icon by replacing the href with the winner's icon -->
          <use xlink:href="${link}"></use>
        </svg>
        <h2 class="text-white h1 m-0">TAKES THE ROUND</h2>
      </div>
      <div class="d-flex justify-content-center gap-3 pt-3 modal-action">
        <button id="quit" class="btn fw-bold py-2">Quit</button>
        <button id="nextRound" class="btn fw-bold py-2">NEXT ROUND</button>
      </div>
    </div>`
    modal.innerHTML = modalX
}

quit.addEventListener('click', function(){
    mensajeModal()
    limpiarTablero()
    score.innerText = 0
    score1.innerText = 0
    score2.innerText = 0
})

function limpiarTablero() {
    boardItem.forEach((element) => {
        element.innerHTML = ""
    })
}

//limpiarTablero()
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
