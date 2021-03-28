import randomColor from 'randomcolor';
import React, { Component } from 'react';

export default class Content extends Component {
    constructor() {
        super() 

        this.state = {
            bGColor : randomColor(),
            textColor : randomColor()
        }
    }
  
    render() {
        return (
            <div className="content-container">
                <div className="color-block" 
                style={{backgroundColor: this.state.bGColor}}>
                    <div className="color-statement" 
                    style = {{color : this.state.textColor}}>
                        <h1>React Icons Are Difficult</h1>
                    </div>
                </div>
          
                <div className="color-button">
                    <button>Click Me</button>
                </div>
            </div>
        )
    }
}

