import Game from './Game'

class Player {
  private _id: string;
  name: string;
  currentGame: Game;
  cards: string[];

  constructor(name: string) {
    this._id = Math.random() * 10000 + '';
  }

  join(gameId: string) {

  }
}

export default Player;
