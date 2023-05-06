import Player from "./Player";
import Round from './Round'

class Game {
  currentRound: Round
  players: Player[];
  id: string;
  roundHistory: Round[];

  constructor() {
  }

  setRound(round: Round) {
    this.currentRound = round;
  }

  getRound() {
    return this.currentRound;
  }

  addPlayer(player: Player) {
    this.players.push(player)
  }

  removePlayer(player: Player) {
    const index = this.players.indexOf(player);
    this.players = this.players.splice(index, 1);
  }
}

export default Game;
