
  const restart = document.querySelector('#restart')
  const scoreX = document.querySelector('#score')
  const scoreTies = document.querySelector('#score1')
  const scoreO = document.querySelector('#score2')
  const quit = document.querySelector('#quit')
  const nextRound = document.querySelector('#nextRound')
  const modal = document.querySelector('.modal')

  const boardItem = document.querySelectorAll('.board_item')

  let playerOne = true;
  let score = { X: 0, O: 0, ties: 0 }
  for (let i = 0; i < boardItem.length; i++) {
    boardItem[i].addEventListener('click', jugadorQueMueve);
  }
  function jugadorQueMueve(e) {
    let movimiento = e.target.innerHTML;
    console.log(movimiento);
    if (!movimiento.length) {
      e.target.innerHTML = playerOne ? `<svg class="icon cross">
            <use xlink:href="./icons/icon-x.svg#icon-x"></use>
          </svg>` : `<svg class="icon circle">
            <use xlink:href="./icons/icon-o.svg#icon-o"></use>
          </svg>`;
      playerOne = !playerOne;
      combinacionesAGanar(0, 1, 2, playerOne);
      combinacionesAGanar(3, 4, 5, playerOne);
      combinacionesAGanar(6, 7, 8, playerOne);
      combinacionesAGanar(0, 3, 6, playerOne);
      combinacionesAGanar(1, 4, 7, playerOne);
      combinacionesAGanar(2, 5, 8, playerOne);
      combinacionesAGanar(0, 4, 8, playerOne);
      combinacionesAGanar(2, 4, 6, playerOne);
    }
  }
  function combinacionesAGanar(celda1, celda2, celda3, playerOne) {
    if (boardItem[celda1].innerHTML.length &&
      boardItem[celda1].innerHTML === boardItem[celda2].innerHTML &&
      boardItem[celda2].innerHTML === boardItem[celda3].innerHTML) {
      ganadorModal(playerOne);
      console.log("ganador :", celda1, celda2, celda3, playerOne);
    }else{
      console.log("tie");
    }
  }

  function toggleModal() {
    modal.classList.toggle('d-none')
  }
  const winnerIcon = document.getElementById("winner")
  function ganadorModal(ganador) {
    modal.style = " display:block !important;"
    if (ganador === false) {
      document.querySelector('#winner').innerHTML = `<use xlink:href="./icons/icon-x.svg#icon-x"></use>`
      score.X++;
      updateScores();
    } else if (ganador === true) {
      document.querySelector('#winner').innerHTML = `<use xlink:href="./icons/icon-o.svg#icon-o"></use>`
      score.O++;
      updateScores();
    } else {
     
    displayTie()
    }




  }

  quit.addEventListener('click', () => {
    modal.style = " display:none !important;"
    toggleModal()
    limpiarTablero()
    scoreX.innerText = 0
    scoreTies.innerText = 0
    scoreO.innerText = 0
  })

  function limpiarTablero() {
    boardItem.forEach((element) => {
      element.innerHTML = ""
    })
  }

  limpiarTablero()
  restart.addEventListener('click', function () {
    limpiarTablero()
    scoreX.innerText = 0
    scoreTies.innerText = 0
    scoreO.innerText = 0
  })
  nextRound.addEventListener('click', () => {
    modal.style = " display:none !important;"
    limpiarTablero()
  })


  const updateScores = () => {
    scoreX.innerHTML = score.X;
    scoreO.innerHTML = score.O;
    scoreTies.innerHTML = score.ties;
  };
  const displayTie = () => {
    modal.classList.remove("d-none");
        winnerIcon.setAttribute("xlink:href", "./icons/icon-tie.svg#icon-tie");
        document.querySelector(".modal h2").textContent = "IT'S A TIE!";
        score.ties++;
        updateScores();
  };

