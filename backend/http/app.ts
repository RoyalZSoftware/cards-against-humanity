import { Express } from "express";
import Game from "../domain/Game";
import Player from "../domain/Player";
import { Context } from "./context";

const express = require('express')
const app = express();

app.use(express.json());

const context = new Context();

app.use((req, res, next) => {
    const playerId = req.headers['X-Player-Id'];

    const player = context.findPlayer(playerId);

    req.player = player;
    next();
});

const port = 3000;

app.post('/login', (req, res: any) => {

    const {username} = req.body;

    const player = new Player(username);

    res.json(player);
});

app.post('/game', (req, res) => {
    const {player} = req;
})

app.post('/join', (req, res) => {
    const {player} = req;

    const game = context.findGame(req.body.game);

    game.players.push(player);

    res.send('OK');
});

app.post('/play', (req, res) => {
    const {player} = req;

    const {whiteCards} = req.body;

    const game = context.findGame(req.body.game);


});
