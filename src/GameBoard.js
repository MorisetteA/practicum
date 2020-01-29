import React from 'react';
import './App.css'
import GameSquare from "./GameSquare";
import calculateWinner from './GameStatus';


export default class GameBoard extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }


    eachSquare(i)
    {
        return (
            <GameSquare value={this.state.squares[i]}
                        onClick={() => this.handleClick(i)}/>
        );

    }
render () {
    const winner = calculateWinner(this.state.squares);
    let status;

        if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }


    return (

        <div>
            <div className="Row">
                {this.eachSquare(0)}
                {this.eachSquare(1)}
                {this.eachSquare(2)}
            </div>
            <div className="Row">
                {this.eachSquare(3)}
                {this.eachSquare(4)}
                {this.eachSquare(5)}
            </div>
            <div className="Row">
                {this.eachSquare(6)}
                {this.eachSquare(7)}
                {this.eachSquare(8)}
            </div>
            <div className="status">{status}</div>
        </div>

    );
}

}


