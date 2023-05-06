import Player from './Player'

class Round {
  private _state: 'PLAYING' | 'PICKING' | 'RESULTS' = 'PLAYING';
  private _results: Record<string, string[]> = {};

  constructor(private _blackCard: string, private _zaar: Player) {
  }

  getZaar() {
    return this._zaar;
  }

  setResultOfPlayer(playerId: string, cards: string[]) {
    this._results[playerId] = cards;
  }

  getResults() {
    this._results
  }

  pickWinner(playerId: string) {
    //
  }

}

export default Round;
