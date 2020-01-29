import React from 'react';
import GameTitle from './GameTitle';

export default class Game extends React.Component {


    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div id="game">
                <GameTitle/>
            </div>
        );
    }

}