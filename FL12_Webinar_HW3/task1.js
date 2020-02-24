'use strict';

class Card {

    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }

    get isFaceCard() {
        return this.rank === 1 || this.rank > 10;
    }

    toString() {
        let facesNames = { 1: 'Ace', 11: 'Jack', 12: 'Queen', 13: 'King'};
        return `${this.isFaceCard ? facesNames[this.rank] : this.rank} of ${this.suit}`;
    }

    static Compare(cardOne, cardTwo) {
        return (cardOne.rank == cardTwo) ? 0 : (cardOne > cardTwo ? 1 : -1);
    }
}

class Deck {

    constructor() {
        const suit = ['hearts', 'diamonds', 'clubs', 'spades'];
        let rank = 13;
        this.cards = [];

        for (let s in suit) {
            for (let r = 1; r <= rank; r++) {
                this.cards.push(new Card(suit[s], r));
            }
        }
    }

    get count() {
        return this.cards.length;
    }

    shuffle() {
        const { cards } = this;
        let i;
        let j = cards.length;
        while(j) {
            i = Math.floor(Math.random() * j--);
            [cards[j], cards[i]] = [cards[i], cards[j]];
        }
        return this;
    }

    draw(n) {
        return this.cards.splice(-n, n);
    }
}

class Player {

    constructor(name) {
        this.name = name;
        this._wins = 0;
        this.deck = new Deck();
        this.deck.shuffle();
    }

    get wins() {
        return this._wins;
    }

    static Play(playerOne, playerTwo) {
        while (playerOne.deck.cards.length && playerTwo.deck.cards.length){
            let cardOfOne = playerOne.deck.draw(1);
            let cardOfTwo = playerTwo.deck.draw(1);
            if (Card.Compare(cardOfOne, cardOfTwo) === 1) {
                console.log(playerOne._wins++);
            } else if (Card.Compare(cardOfOne, cardOfTwo) === -1) {
                console.log(playerTwo._wins++);
            }
        }

        if (playerOne._wins > playerTwo._wins) {
            console.log(`${playerOne.name} wins ${playerOne._wins} to ${playerTwo._wins}`);
        } else if (playerTwo._wins > playerOne._wins){
            console.log(`${playerTwo.name} wins ${playerTwo._wins} to ${playerOne._wins}`);
        } else {
            console.log(`It's a tie this time`);
        }
    }
}

let p1 = new Player('P1');
let p2 = new Player('P2');

Player.Play(p1, p2);
console.log();
