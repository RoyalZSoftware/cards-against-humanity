import Game from "../domain/Game";
import Player from "../domain/Player";

export class Context {
    
    private _games: Game[] = [];
    private _players: Player[] = [];
    
    constructor() {

    }

    public addGame(game: Game) {
        this._games.push(game);
    }

    public addPlayer(player: Player) {
        this._players.push(player)
    }

    public findPlayer(playerId: string): Player {
        return this._players.find(c => c.id === playerId);
    }

    public findGame(gameId: string): Game {
        return this._games.find(c => c.id === gameId);
    }

}