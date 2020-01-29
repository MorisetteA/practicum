import React from 'react';
import GameBoard from './GameBoard';
import "./App.css";


export default function GameTitle (props) {

        return (
            <header>
                <h1>Tic Tac Toe</h1>
                <GameBoard/>
            </header>
        );

}
