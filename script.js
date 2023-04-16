
const messageEl = document.getElementById("message-el");

const cardsEl = document.getElementById("cards-el");

const sumEl = document.getElementById("sum-el");

const playerEl = document.getElementById("player-el");

let firstCard = Math.floor(Math.random()*13)+1;

let secondCard = Math.floor(Math.random()*13)+1;

let sum;

let isAlive = true;

let hasBlackJack = false;

let player = {
    chips : 400 ,
    name : "Nayeem"
}

playerEl.innerText = player.name + " - " + "$" + player.chips;

function renderGame(){
    if (firstCard > 10) {
        return firstCard = 10;
    } else if(secondCard > 10){
        return secondCard = 10;
    }
    cardsEl.innerText = "Cards: " + firstCard + " " + secondCard;
    sum = firstCard + secondCard;
    checkSum();
    sumEl.innerText = "Sum: " + sum;
}

function startGame(){
    renderGame()
}

function newCard(){
    let newCard = Math.floor(Math.random()*13)+1;
    if (newCard > 10) {
        return newCard = 10;
    }
    cardsEl.innerText += " " + newCard;
    sum += newCard;
    sumEl.innerText = "Sum:" + sum;
    checkSum();
}

function checkSum(){
    if (sum < 21) {
        messageEl.innerText = "Want to draw a new card?";}else if(sum == 21){
         messageEl.innerText = "You've got Blackjack...."
     }else{
         messageEl.innerText = "Game Over!! Try Again"
     }
}