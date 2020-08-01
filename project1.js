let cardValues = [
          [2, 2],
          [3, [3, [4, 4],
                    [5, 5],
                    [6, 6],
                    [7, 7],
                    [8, 8],
                    [9, 9],
                    [10, 10],
                    [j, 10],
                    [K, K],
                    [Q, 10],
                    [A, [1, 11]]
                    let suits = [hearts, diamonds, spades, clubs];
                    let
                         class GameRules {
                              constructor() {
                                   this.maxValue = 21
                                   this.roundWin
                                   this.roundlose

                              }
                              checkWin() {
                                   if (playerCardValue >= dealerCardValue && playerCardValue >= 21); {
                                        console.log("you win")
                                   }
                                   checkLose() {
                                        if (playerCardValue < dealerCardValue && dealerCardValue <= 21) {
                                             console.log("you lose");
                                        }
                                   }

                              }
                         }

                    class player {
                         constructor(playerCash, playerCardValue, playerBet) {
                              this.playerCash = 100
                              this.playerCardValue = null
                              this.playerBet = null
                              this.hit = //+ 1 card
                         }
                         playerWin(playerCash) += this.playerBet;
                    }
                    playerLose(playerCash) -= this.playerBet;

               }
               class dealer {
                    constructor() {
                         this.maxValue = 18


                    }
               }



               // j query removes card from deck
               // // function shuffle()
               // // // use math.randon and math.floor to shuffle the array of cards.
               // create a new variable called deck

               function startBlackJack()
               const player = new player();
               const dealer = new dealer();

               player.playerBet = prompt("enter your bet amount")
               while (player.playerBet > player.playerCash || player.playeBet.NaN == true) {
                    alert("you dont have anough money");
                    player.playerBet = prompt("enter your bet amount");
               }

               while (player.playerCardValue <= 21 && dealer.maxValue <= 18) {
                    drawCard()


               }


               // // dealCards(deck) //jquery

               // stayButton()
               // if playerCardValue < 21 && player pushes stayButton dealer hits until dealer card value is > 17

               // checkWin()

               // if checkWin === true
               // playerBet += playerBank

               // check lose === true
               // playerBet -= playerBank

               // // function playerBank()


               // loop back to beginning of the game but rentain player bank