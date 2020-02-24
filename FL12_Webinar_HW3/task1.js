'use strict';
/*function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    //this.isFaceCard = isFaceCard;
}
function deck() {
    this.suit = ['hearts', 'diamonds', 'clubs', 'spades'];
    this.rank = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
    let cards = [];

    for(let r = 0; r < this.rank.length; r++) {
        for(let s = 0; s < this.suit.length; s++) {
            cards.push(new Card(this.suit[s], this.rank[r]));
        }
    }
    return cards;

};

console.log(deck());*/

class Card {

    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }

    get isFaceCard() {
        return this.rank === 1 || this.rank > 10 
    }

    toString() {

    }
}

class Deck {

    constructor() {
        const suit = ['hearts', 'diamonds', 'clubs', 'spades'];
        const rank = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
        this.cards = [];

        for (let s in suit) {
            for (let r in rank) {
                this.cards.push(`${rank[r]} of ${suit[s]}`);
            }
        }
    }

    get count() {
        return this.cards.length;
    }

    shuffle() {
        const { cards } = this;
        let m = cards.length;
        let i;
        while(m) {
            i = Math.floor(Math.random() * m--);
            [cards[m], cards[i]] = [cards[i], cards[m]];
        }
        return this;
    }
}

let testDeck = new Deck();
console.log(testDeck.shuffle());