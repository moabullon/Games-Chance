
// steps of this process:
// (1) create a base constructor (TIYPerson);
// (2-3) create a related constructor (TIYStudent) and set base methods (TIYPerson.prototype)
// those 2 steps can happen in either order;
// (4) set related prototype (TIYStudent.prototype);
// (5) set methods on related prototype other than those on base (TIYStudent.prototype.___)


//Contructor that represents generic cards//


var Card = function (value, suit) {
  this.suit = suit
  this.value = value
}


Card.prototype.display = function () {
  return `${this.value}  of ${this.suit}`
}


var card = new Card(9, "Hearts")



card.display()


//Deal method//

function Deck () {
  var suits = [ "Clubs", "Spades", "Hearts", "Diamonds" ]
  var values = [ "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King" ]

  var cards = []
  suits.forEach(suit => {
    values.forEach(value => {
      var card = new Card(value, suit)
      cards.push(card)
    })
  })
  this.cards = cards
}



Deck.prototype.deal = function () {
 this.dealt = []
 var cardSelector = this.cards.splice(Math.floor(Math.random()*this.cards.length), 1)[0]
 var cardSelector2 = this.cards.splice(Math.floor(Math.random()*this.cards.length), 1)[0]
 this.dealt.push(cardSelector)
 this.dealt.push(cardSelector2)
}

var deck = new Deck()

deck.deal()
deck.dealt

function Hand (player) {
 this.player = player
 this.cards = deck.dealt
}

Hand.prototype.show = function() {
 return `${this.player}'s hand has a ${this.cards[0].display()} and ${this.cards[1].display()}`
}

var hand2 = new Hand('Steve')

hand2.show()  //shows the cards a specific player has (Steve)
