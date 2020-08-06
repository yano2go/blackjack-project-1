// ira these are the things i need help with
// fix hit me button
// fix cards not showing
//finish start black jack by adding play again function
// is shift the  right way to pull deck[0].filename
//display bank acount

// Wrapped whole thing in jQuery document ready to wait for dom to load before firing
// $(()=>{}):
$(() => {
  // Declare these as global variables so any function can access them without them
  // having to be passed in as arguments:
  let dealerHand = [];
  let playerHand = [];
  let player;
  let dealer;
  let deck = [{
      name: "2 of Clubs",
      value: 2,
      filename: "2_of_clubs.svg",
    },
    {
      name: "2 of diamonds",
      value: 2,
      filename: "2_of_diamonds.svg",
    },
    {
      name: "2 of hearts",
      value: 2,
      filename: "2_of_hearts.svg",
    },
    {
      name: "2 of spades",
      value: 2,
      filename: "2_of_spades.svg",
    },
    {
      name: "3 of clubs",
      value: 3,
      filename: "3_of_clubs.svg",
    },
    {
      name: "3 of diamonds",
      value: 3,
      filename: "3_of_diamonds.svg",
    },
    {
      name: "3 of hearts",
      value: 3,
      filename: "3_of_hearts.svg",
    },
    {
      name: "3 of spades",
      value: 3,
      filename: "3_of_spades.svg",
    },
    {
      name: "4 of clubs",
      value: 4,
      filename: "4_of_clubs.svg",
    },
    {
      name: "4 of diamonds",
      value: 4,
      filename: "4_of_diamonds.svg",
    },
    {
      name: "4 of hearts",
      value: 4,
      filename: "4_of_hearts.svg",
    },
    {
      name: "4 of spades",
      value: 4,
      filename: "4_of_spades.svg",
    },
    {
      name: "5 of clubs",
      value: 5,
      filename: "5_of_clubs.svg",
    },
    {
      name: "5 of diamonds",
      value: 5,
      filename: "5_of_diamonds.svg",
    },
    {
      name: "5 of hearts",
      value: 5,
      filename: "5_of_hearts.svg",
    },
    {
      name: "5 of spades",
      value: 5,
      filename: "5_of_spades.svg",
    },
    {
      name: "6 of clubs",
      value: 6,
      filename: "6_of_clubs.svg",
    },
    {
      name: "6 of diamonds",
      value: 6,
      filename: "6_of_diamonds.svg",
    },
    {
      name: "6 of hearts",
      value: 6,
      filename: "6_of_hearts.svg",
    },
    {
      name: "6 of spades",
      value: 6,
      filename: "6_of_spades.svg",
    },
    {
      name: "7 of clubs",
      value: 7,
      filename: "7_of_clubs.svg",
    },
    {
      name: "7 of diamonds",
      value: 7,
      filename: "7_of_diamonds.svg",
    },
    {
      name: "7 of hearts",
      value: 7,
      filename: "7_of_hearts.svg",
    },
    {
      name: "7 of spades",
      value: 7,
      filename: "7_of_spades.svg",
    },
    {
      name: "8 of clubs",
      value: 8,
      filename: "8_of_clubs.svg",
    },
    {
      name: "8 of diamonds",
      value: 8,
      filename: "8_of_diamonds.svg",
    },
    {
      name: "8 of hearts",
      value: 8,
      filename: "8_of_hearts.svg",
    },
    {
      name: "8 of spades",
      value: 8,
      filename: "8_of_spades.svg",
    },
    {
      name: "9 of clubs",
      value: 9,
      filename: "9_of_clubs.svg",
    },
    {
      name: "9 of diamonds",
      value: 9,
      filename: "9_of_diamonds.svg",
    },
    {
      name: "9 of hearts",
      value: 9,
      filename: "9_of_hearts.svg",
    },
    {
      name: "9 of spades",
      value: 9,
      filename: "9_of_spades.svg",
    },
    {
      name: "10 of clubs",
      value: 10,
      filename: "10_of_clubs.svg",
    },
    {
      name: "10 of diamonds",
      value: 10,
      filename: "10_of_diamonds.svg",
    },
    {
      name: "10 of hearts",
      value: 10,
      filename: "10_of_hearts.svg",
    },
    {
      name: "10 of spades",
      value: 10,
      filename: "10_of_spades.svg",
    },
    {
      name: "ace of clubs",
      value: 11,
      filename: "ace_of_clubs.svg",
    },
    {
      name: "ace of diamonds",
      value: 11,
      filename: "ace_of_diamonds.svg",
    },
    {
      name: "ace of hearts",
      value: 11,
      filename: "ace_of_hearts.svg",
    },
    {
      name: "ace of spades",
      value: 11,
      filename: "ace_of_spades.svg",
    },
    {
      name: "jack of clubs",
      value: 10,
      filename: "jack_of_clubs.svg",
    },
    {
      name: "jack of diamonds",
      value: 10,
      filename: "jack_of_diamonds.svg",
    },
    {
      name: "jack of hearts",
      value: 10,
      filename: "jack_of_hearts.svg",
    },
    {
      name: "jack of spades",
      value: 10,
      filename: "jack_of_spades.svg",
    },
    {
      name: "king of clubs",
      value: 10,
      filename: "king_of_clubs.svg",
    },
    {
      name: "king of diamonds",
      value: 10,
      filename: "king_of_diamonds.svg",
    },
    {
      name: "king of hearts",
      value: 10,
      filename: "king_of_hearts.svg",
    },
    {
      name: "king of spades",
      value: 10,
      filename: "king_of_spades.svg",
    },
    {
      name: "queen of clubs",
      value: 10,
      filename: "queen_of_clubs.svg",
    },
    {
      name: "queen of diamonds",
      value: 10,
      filename: "queen_of_diamonds.svg",
    },
    {
      name: "queen of hearts",
      value: 10,
      filename: "queen_of_hearts.svg",
    },
    {
      name: "queen of spades",
      value: 10,
      filename: "queen_of_spades.svg",
    },
  ];

  class playerperson {
    constructor(name) {
      this.playerCash = 100;
      this.playerCardValue = 0;
      this.playerBet = null;
      this.playerName = name;
    }
    playerWin() {
      this.playerCash += this.playerBet;
      alert("you win");
    }
    playerLose() {
      this.playerCash -= this.playerBet;
      alert("you lose");
    }
  }

  function betMoney(player) {
    console.log('bet money starts');
    //fix by connecting player bet and cash
    let playerBet = 0;
    let playerCash = player.playerCash
    let betMoneyPrompt = "You have " + playerCash + " dollars. How much do you want to bet?"
    playerBet = prompt(betMoneyPrompt);
    while (playerBet > playerCash) {
      console.log('while loop is triggered');
      if (playerBet > playerCash) {
        alert("you dont have anough money");
        playerBet = prompt(betMoneyPrompt);

      }
    }
    player.playerBet = playerBet;
  }

  function shuffle() {
    for (let i = 0; i < 1000; i++) {
      let position1 = Math.floor(Math.random() * deck.length);
      let position2 = Math.floor(Math.random() * deck.length);
      let entry1 = deck[position1];
      let entry2 = deck[position2];
      deck[position1] = entry2;
      deck[position2] = entry1;
    }

  }

  function endgame(continueGame) {
    continueGame = false;
  }

  function startBlackJack() {
    $(`#${"playerboard"}`).empty();
    $(`#${"dealerboard"}`).empty();
    $(".one").fadeOut();
    playerHand = [];
    dealerHand = [];
    if (player === undefined && dealer === undefined) { 
      player = new playerperson("player");
      dealer = new playerperson("dealer");
    }
    else{
      player.playerCardValue = 0;
      dealer.playerCardValue = 0;  
    }
    player.playerBet = null;
    while (player.playerBet == null) {
      betMoney(player);
    }
    //player.playerBet = betMoney(player);

    dealCards(player, playerHand);
    console.log('test');
    dealCards(player, playerHand);
    console.log('test');
    dealCards(dealer, dealerHand);
    console.log('test');
    dealCards(dealer, dealerHand);
    console.log('test');




    $('#hit').on('click', () => {
      console.log("test hit ")
      hitMe(playerHand, dealerHand, player, dealer)

    });
    $('#nomore').on('click', () => {
      console.log('test stay')
      stay(player, dealer)

    });




  }


  function dealCards(playerOrDealer) {
    shuffle();
    let filename = deck[0].filename;
    let value = deck[0].value;
    let path = "./playingcards/" + filename;
    let playerName = playerOrDealer.playerName;
    let playerBoard = playerName + "board";
    $(`#${playerBoard}`).prepend(`<img src="${path}"/>`);
    console.log('img added');
    let card = deck[0];
    console.log("value of card: " + value)
    if (playerName == "player") {
      $(`${playerHand}`).push(card);
      playerOrDealer.playerCardValue += value;
      deck.shift();
    }
    else{
      $(`${dealerHand}`).push(card);
    playerOrDealer.playerCardValue += value;
    deck.shift();
  }
    
  }


  function hitMe(playerHand, dealerHand, player, dealer) {
    console.log("im clicked");
    shuffle(deck);
    dealCards(player);
    console.log(player.playerCardValue)
    if (player.playerCardValue > 21) {
      checkWin(player, dealer);
      return
    }

     if (dealer.playerCardValue < 16) {
      dealCards(dealer);
    
    }
    if (dealer.playerCardValue > 21) {
      checkWin(player, dealer);
      return
    }
    if (player.playerCardValue > 21 || dealer.playerCardValue > 21) {
      let playerCardValue = player.playerCardValue;
      let dealerCardValue = dealer.playerCardValue;
      checkWin(player, dealer);
      return
    }
  }

  function stay(player, dealer) {
    if (player.playerCardValue > dealer.playerCardValue) {
      checkWin(player, dealer);

    } else {
      checkWin(player, dealer);
    }

  }

  function checkWin(player, dealer) {
    let playerCardValue = player.playerCardValue
    let dealerCardValue = dealer.playerCardValue
    if (dealerCardValue > 21 || (playerCardValue > dealerCardValue && playerCardValue <= 21)) {
      player.playerWin();
      console.log("you win");

    } else {
      player.playerLose();
      console.log("you lose");
    }
    startBlackJack();
  }


  // Attach listen ers:
  // Removed () so they don't invoke at runtime

  $("#start-game1").on("click", () => {
    console.log("clicked")
    startBlackJack()
  });
});