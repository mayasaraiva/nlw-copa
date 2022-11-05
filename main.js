function createGame(player1, hour, player2){
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}" />
    </li>
  `
}


let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
      createCard("20/11", "Domingo", createGame("qatar", "13:00", "ecuador")) +
      createCard("21/11", "Segunda", createGame("england", "10:00", "iran") + createGame("usa", "16:00", "wales")) +
      createCard("22/11", "Terça", createGame("argentina", "07:00", "arabia")) +
      createCard("24/11", "Quarta", createGame("brazil", "16:00", "serbia")) + 
      createCard("28/11", "Segunda", createGame("brazil", "13:00", "suica")) +
      createCard("02/12", "Sexta", createGame("camaroes", "16:00", "brazil"))
