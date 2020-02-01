import React from 'react'; //Getting the react library, creating a javascript object, objects containing properties to make react work
import './App.css'
import GameSquare from "./GameSquare";
import GameInterface from "./GameInterface";

//declaring a new component class that is allowed to be exported
export default class GameBoard extends React.Component { //you have the class and the sub class 'React.Component'
                                                         // React.Component allows you to create your own class (its a javascript class)
//this body will tell the component class how to build a react component
    constructor(props)
    {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if(squares[i] === null ) {
            squares[i] = this.state.xIsNext ? 'X' : 'O';
        }
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



render () {//A render method is: render = property, the below function is the value

    const winner = calculateWinner(this.state.squares);
    let status;

    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (

        <div className="container">
        <div className="board">

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
            <GameInterface/>

        </div>
        </div>
    );
}

}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


