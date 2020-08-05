// ira these are the things i need help with
// fix hit me button
// fix cards not showing
//finish start black jack by adding play again function
// is shift the right way to pull deck[0].filename
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
  let deck = [
    {
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
      filename: "3 _of_diamonds.svg",
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
      filename: "5_of_diamods.svg",
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
      filename: "7_of hearts.svg",
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
      filename: "9",
    },
    {
      name: "10_of_clubs.svg",
      value: 10,
      filename: "",
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
    constructor() {
      this.playerCash = 100;
      this.playerCardValue = 0;
      this.playerBet = null;
    }
    playerWin() {
      this.playerCash += this.playerBet;
    }
    playerLose() {
      this.playerCash -= this.playerBet;
    }
  }

  function betMoney(player) {
    //fix by connecting player bet and cash
    let playerBet = prompt("enter your bet amount");
    while (playerBet > player.playerCash) {
      alert("you dont have anough money");
      playerBet = prompt("enter your bet amount");
    }
    return playerBet;
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
    prompt("are you ready to make some big high roller money?");
    $(".one").fadeOut();
    player = new playerperson();
    dealer = new playerperson();
    player.playerBet = betMoney(player);
    dealCards("player");
    dealCards("dealer");
    dealCards("player");
    dealCards("dealer");
    player.playerCardValue += playerHand[0].value;
    dealer.dealerCardValue += dealerHand[0].value;
    player.playerCardValue += playerHand[1].value;
    dealer.dealerCardValue += dealerHand[1].value;
    let continueGame = true;
    while (
      player.playerCardValue < 22 &&
      dealer.dealerCardValue < 16 &&
      continueGame == true
    ) {
      // Write other code in here, but shouldn't have event listeners loading every loop cycle in here
      // Moved event listeners to bottom to attach on DOM load one time
    }

    checkWin(playerHand, dealerHand, player);
  }

  function dealCards(playerOrDealer) {
    let path = "./playingcards/" + deck[0].filename;
    $("#gameboard").prepend(`<img src="${path}"/>`);

    if (playerOrDealer === "player") {
      playerHand.push(deck[0]);
    } else {
      dealerHand.push(deck[0]);
    }
    deck.shift();
  }

  function hitMe() {
    console.log("im clicked");
    shuffle(deck);
    deck[0].filename;
    dealCards(playerHand, deck);
    if (dealerHand < 16) {
      dealCards(dealerHand, deck);
      deck[1].filename;
    }
  }

  function stay(playerHand, dealerHand, player) {
    checkWin(playerHand, dealerHand, player);
  }

  function checkWin(playerHand, dealerHand, player) {
    let totalCardValue = 0;
    let dealerCardValue = 0;
    for (let i = 0; i < playerHand.length; i++) {
      totalCardValue += playerHand[i].value;
    }
    for (let i = 0; i < dealerHand.length; i++) {
      dealerCardValue += dealerHand[i].value;
    }
    if (totalCardValue <= 21 && dealerCardValue < totalCardValue) {
      player.playerWin();
    } else {
      player.playerLose();
    }
  }

  function checkLose(playerHand, dealerHand, player) {
    if (checkLose === true) {
      playerBet -= playerBank;
    }
  }

  // Attach listeners:
  // Removed () so they don't invoke at runtime

  $("#start-game").on("click", startBlackJack);
  $("#bet").on("click", betMoney);
  $("#hit").on("click", hitMe);
  //   $("#nomore").on("click", endgame(continueGame)); // TODO: Fix this
});
