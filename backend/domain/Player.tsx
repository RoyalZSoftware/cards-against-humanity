import Game from './Game';
import WhiteCard from './WhiteCard';

class Player {
  private _id: string;
  private _currentGame: Game;

  constructor(private _name: string) {
    this._id = randomId();
  }

  set name(name: string) {
    this._name = name
  }

  get name() {
    return this._name
  }

  get id() {
    return this._id;
  }

  getHand() {
    this._currentGame?.currentRound?.playerCards[this._id]
  }

  play(whiteCards: WhiteCard[]) {
    this._currentGame?.currentRound?.results[this._id]
  }

  pickWinner(whiteCard: WhiteCard[]) {
    this._currentGame?.currentRound ?
  }
}

export default Player;
