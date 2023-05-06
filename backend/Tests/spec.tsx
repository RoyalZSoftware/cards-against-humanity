import Game from '../Game'
import Player from '../Player'
import Players from '../Players'
import Cards from '../Cards'
import WhiteCards from '../WhiteCards'
import BlackCards from '../BlackCards'

const player_one = new Player('Adnan')
player_one.updateCardeezer(false)

const players = new Players();
players.addPlayer('Adnan')
const playercount = players.getPlayersSize()

const cardcount = 60

const roundcount = 7

const id = '012102'
const count = 12
const text = 'Hello World'
const cards = new Cards()
cards.deleteCard(id)
cards.addCard(id, text)
cards.hasSlot() // checks for {} in text


// both extend Cards Class
const cardsBlackcard = new BlackCards(roundcount)
// roundcount -> blackcard count
const cardsWhitecard = new WhiteCards(10 * playercount + (roundcount - 1) * playercount)
// 10 * playercount + (roundcount - 1) * playercount //  -> whitecard count
cardsWhitecard.getDeck() // Liste mit Cards

const game = new Game(players, roundcount)
// game.init()
// game.newRound -> roundcount++ if(roundcount <= roundcount)
// game.selectCardeezer -> players  
// game.selectBlackCard -> roundcount = blackCards 
// game.distributeCards -> player_one.getStartingCards()


