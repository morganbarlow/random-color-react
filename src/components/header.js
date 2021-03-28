import React, { Component } from 'react';

export default class Header extends Component {

    render() {
        return (
            <div className="header-container">
                <div className="header-wrapper">
                    <h1>Mo's Random Colors</h1>
                </div>

                <div className="game-play-statement">
                    <h2> Push my buttons, see what happens!</h2>
                </div>
            </div>
        )
    }
}