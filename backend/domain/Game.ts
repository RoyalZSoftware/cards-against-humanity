import Player from "./Player";
import Round from './Round'

class Game {
  currentRound: Round
  players: Player[];
  private _state: 'INGAME' | 'LOBBY';

  constructor() {
  }

  newRound() {

  }

}

export default Game;
