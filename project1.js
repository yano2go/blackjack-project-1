// let cardValues = [
//           ['2', 2, 'hearts'],
//           ['3', 3, "hearts"],
//           ['4', 4, 'hearts'],
//           ['5', 5, 'hearts'],
//           ['6', 6, 'hearts'],
//           ['7', 7, 'hearts'],
//           ['8', 8, 'hearts'],
//           ['9', 9, 'hearts'],
//           ['10', 10, 'hearts'],
//           ['j', 10, 'hearts'],
//           [K, 10],
//           [Q, 10],
//           [A, [1, 11]];

class GameRules {
     constructor() {
          this.maxValue = 21
          this.roundWin
          this.roundlose

     }
     checkWin() {
          if (playerCardValue >= dealerCardValue && playerCardValue >= 21) {
               console.log("you win");
          }
          checkLose(); {
               if (playerCardValue < dealerCardValue && dealerCardValue <= 21) {
                    console.log("you lose");
               }
          }

     }
}

class deck {
     constructor(deckSize) {
          this.deckSize = new Array(deckSize);


     }

}


class player {
     constructor() {
          this.playerCash = 100
          this.playerCardValue = 0
          this.playerBet = null
     }
     playerWin() {

          this.playerCash += this.playerBet;
     }
     playerLose() {
          this.playerCash -= this.playerBet;
     }
}


class dealer {
     constructor() {
          this.maxValue = 18


     }
}

function shuffle() {
     for (let i = 0; i < 1000; i++) {
          let position1 = Math.floor((math.random() * deck.length))
          let position2 = Math.floor((math.random() * deck.length))
     }
}

function startBlackJack() {
     const player = new player();
     const dealer = new dealer();
     const playerHand = new deck(0);
     const dealerHand = new deck(0);
     const cardDeck = new deckSize(52);
     const cardValues = [['2', 2], ['3', 3] , ['4', 4], ['5', 5], ['6', 6], ['7', 7], ['8', 8], ['9', 9], ['10', 10], ['J', 10], ['K', 10], ['Q', 10], ['A', [1, 11]]];
     const suitValue = ['ace', 'clubs', 'hearts', 'diamonds'];
     for(let i =0; i < suitValue.length; i++){
          for( let j = 0; j < cardValues.length; j++){
          // jquery add object with value of current suit and card value
          }
     }

     player.playerBet = prompt("enter your bet amount")
     while (player.playerBet > player.playerCash || player.playeBet.NaN == true) {
          alert("you dont have anough money");
          player.playerBet = prompt("enter your bet amount");
     }


     while (player.playerCardValue <= 21 && dealer.maxValue <= 18) {
          //if player presses hit button draw  a new card/
          // if player goes over 21  display you lose and subtract bet
          // if player wins  display win and add bet
     }

     $stayButton(){
     ('#stay").on("click", $stayButton())
          if (player )
} 


     checkWin() 
     if (checkWin === true) {
          playerBet += playerBank
     }

     checkLose()
     if (checkLose === true) {
          playerBet -= playerBank
     }
}
//    playerBank() =  .