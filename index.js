let cards = []
let sum = 0
let blackJack = false
let alive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el") // - id
//let sumEl = document.querySelector(".sum-el") // - class
let cardsEl = document.getElementById("cards-el")
let player = {
  name: "Саню",
  chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomNumber = Math.floor( Math.random() * 13 ) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function startGame() {
  alive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  if (sum <= 20) {
      message = "Хотите получить новую карту?"
  } else if (sum === 21) {
      message = "У вас Блэкджек!"
      blackJack = true
  } else {
      message = "Вы выбыли из игры!"
      alive = false
  }

  messageEl.textContent = message
  sumEl.textContent = "Сумма: " + sum
  cardsEl.textContent = "Карты: "
  for (let i = 0; i < cards.length; i ++){
    cardsEl.textContent += cards[i] + " "
  }
}

function getNewCard() {
  if(alive===true && blackJack===false){
  let card = getRandomCard()
  sum += card
  cards.push(card)
  renderGame()
  }
}