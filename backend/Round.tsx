import BlackCards from "./BlackCards";
import Player from "./Player";
import WhiteCard from "./WhiteCard";

class Round {
  prompt: BlackCards;
  cardZaar: Player;
  results: Record<string, WhiteCard[]> = {};
  state: "pick" | "result"
  playerCards: Record<string, WhiteCard[]> = {};

  constructor(blackCard: BlackCards, cardZaar: Player) {
    this.prompt = blackCard;
  }

  setCardsForPlayer(player: Player, cards: WhiteCard[]) {
    const playerId = player.id;
    this.playerCards[playerId] = cards
  }

  setResultsForPlayer(player: Player, cards: WhiteCard[]) {
    const playerId = player.id;
    this.results[playerId] = cards
  }

  getPlayerCards() {
    return this.playerCards
  }

  flip() {
  }
}

export default Round;
