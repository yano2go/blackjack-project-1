class GameRules {
     constructor() {
          this.maxValue = 21
          this.roundWin
          this.roundlose

     }
     checkWin(player, playerCardValue, dealerCardValue) {
          if (playerCardValue >= dealerCardValue && playerCardValue >= 21) {
               console.log("you win");
               player.playerCash += player.playerBet

          }
     }
     checkLose(playerCardValue, dealerCardValue, player) {
          if (playerCardValue < dealerCardValue && dealerCardValue <= 21) {
               console.log("you lose");
               player.playerCash -= player.playerBet
          }
     }

}



class Player {
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


class Dealer {
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
     prompt("Are you ready to win some big time high roller money?");
     const Player = new player();
     const Dealer = new dealer();
     const playerHand = new deck(0);
     const dealerHand = new deck(0);
     const betMoney = betMoney()
     let deck = [{
               name: "2 of Clubs",
               value: 2,
               filename: "2_of_clubs.svg"
          }, {
               name: "2 of diamonds",
               value: 2,
               filename: "2_of_diamonds.svg"
          }, {
               name: "2 of hearts",
               value: 2,
               filename: "2_of_hearts.svg"
          }, {
               name: "2 of spades",
               value: 2,
               filename: "2_of_spades.svg"
          }, {
               name: "3 of clubs",
               value: 3,
               filename: "3_of_clubs.svg"
          }, {
               name: "3 of diamonds",
               value: 3,
               filename: "3 _of_diamonds.svg"
          }, {
               name: "3 of hearts",
               value: 3,
               filename: "3_of_hearts.svg"
          }, {
               name: "3 of spades",
               value: 3,
               filename: "3_of_spades.svg"
          }, {
               name: "4 of clubs",
               value: 4,
               filename: "4_of_clubs.svg"
          }, {
               name: "4 of diamonds",
               value: 4,
               filename: "4_of_diamonds.svg"
          }, {
               name: "4 of hearts",
               value: 4,
               filename: "4_of_hearts.svg"
          }, {
               name: "4 of spades",
               value: 4,
               filename: "4_of_spades.svg"
          }, {
               name: "5 of clubs",
               value: 5,
               filename: "5_of_clubs.svg"
          }, {
               name: "5 of diamonds",
               value: 5,
               filename: "5_of_diamods.svg"
          }, {
               name: "5 of hearts",
               value: 5,
               filename: "5_of_hearts.svg"
          }, {
               name: "5 of spades",
               value: 5,
               filename: "5_of_spades.svg"
          }, {
               name: "6 of clubs",
               value: 6,
               filename: "6_of_clubs.svg"
          }, {
               name: "6 of diamonds",
               value: 6,
               filename: "6_of_diamonds.svg"
          }, {
               name: "6 of hearts",
               value: 6,
               filename: "6_of_hearts.svg"
          }, {
               name: "6 of spades",
               value: 6,
               filename: "6_of_spades.svg"
          }, {
               name: "7 of clubs",
               value: 7,
               filename: "7_of_clubs.svg"
          }, {
               name: "7 of diamonds",
               value: 7,
               filename: "7_of_diamonds.svg"
          }, {
               name: "7 of hearts",
               value: 7,
               filename: "7_of hearts.svg"
          }, {
               name: "7 of spades",
               value: 7,
               filename: "7_of_spades.svg"
          }, {
               name: "8 of clubs",
               value: 8,
               filename: "8_of_clubs.svg"
          }, {
               name: "8 of diamonds",
               value: 8,
               filename: "8_of_diamonds.svg"
          }, {
               name: "8 of hearts",
               value: 8,
               filename: "8_of_hearts.svg"
          }, {
               name: "8 of spades",
               value: 8,
               filename: "8_of_spades.svg"
          }, {
               name: "9 of clubs",
               value: 9,
               filename: "9_of_clubs.svg"
          }, {
               name: "9 of diamonds",
               value: 9,
               filename: "9_of_diamonds.svg"
          }, {
               name: "9 of hearts",
               value: 9,
               filename: "9_of_hearts.svg"
          }, {
               name: "9 of spades",
               value: 9,
               filename: "9"
          }, {
               name: "10_of_clubs.svg",
               value: 10,
               filename: ""
          }, {
               name: "10 of diamonds",
               value: 10,
               filename: "10_of_diamonds.svg"
          }, {
               name: "10 of hearts",
               value: 10,
               filename: "10_of_hearts.svg"
          }, {
               name: "10 of spades",
               value: 10,
               filename: "10_of_spades.svg"
          }, {
               name: "ace of clubs",
               value: 11,
               filename: "ace_of_clubs.svg"
          }, {
               name: "ace of diamonds",
               value: 11,
               filename: "ace_of_diamonds.svg"
          }, {
               name: "ace of hearts",
               value: 11,
               filename: "ace_of_hearts.svg"
          }, {
               name: "ace of spades",
               value: 11,
               filename: "ace_of_spades.svg"
          }, {
               name: "jack of clubs",
               value: 10,
               filename: "jack_of_clubs.svg"
          }, {
               name: "jack of diamonds",
               value: 10,
               filename: "jack_of_diamonds.svg"
          }, {
               name: "jack of hearts",
               value: 10,
               filename: "jack_of_hearts.svg"
          }, {
               name: "jack of spades",
               value: 10,
               filename: "jack_of_spades.svg"
          }, {
               name: "king of clubs",
               value: 10,
               filename: "king_of_clubs.svg"
          }, {
               name: "king of diamonds",
               value: 10,
               filename: "king_of_diamonds.svg"
          }, {
               name: "king of hearts",
               value: 10,
               filename: "king_of_hearts.svg"
          }, {
               name: "king of spades",
               value: 10,
               filename: "king_of_spades.svg"
          }, {
               name: "queen of clubs",
               value: 10,
               filename: "queen_of_clubs.svg"
          }, {
               name: "queen of diamonds",
               value: 10,
               filename: "queen_of_diamonds.svg"
          }, {
               name: "queen of hearts",
               value: 10,
               filename: "queen_of_hearts.svg"
          },
          {
               name: "queen of spades",
               value: 10,
               filename: "queen_of_spades,svg"
          }
     ]
     dealCards(playerHand, deck);
     dealCards(dealerHand, deck);
     player.playerCardValue = playerHand[0].value;
     dealer.dealerCardValue = dealerHand[0].value;
     let continueGame = true;
     while (player.playerCardValue < 22 && dealer.dealerCardValue < 16 && continueGame == true) {
          hitMe(playerHand, cardValues);
     }

     checkWin(player, playerCardValue, dealerCardValue);
     checkLose(playerCardValue, dealerCardValue, player);
}

function betMoney() {
     let playerBet = prompt("enter your bet amount");
     while (player.playerBet > player.playerCash) {
          alert("you dont have anough money");
          player.playerBet = prompt("enter your bet amount");
     }
}


function dealCards(playerHand, cardValues) {
     cardValues.shuffle();
     playerHand.push(cardValues[0]);
     cardValues.shift();
}

function hitMe(playerHand, cardValues, continueGame) {
     while (hitMe === true);
     dealCards(playerHand, cardValues);
     if (playerResponse === true) {
          hitMe = true
     } else {
          hitMe = false
          return continueGame = false
     }

}

function stay(playerHand, dealerHand, player) {
     checkWin(playerHand, dealerHand, player);
     checkLose(playrerHand, dealerHand, player);

}

// checkWin(playerHand, dealerHand, player);
// if (checkWin === true) {
//      playerBet += playerBank
// }
// checkLose()playerHand, dealerHand, player);
// if (checkLose === true) {
//      playerBet -= playerBank
// }