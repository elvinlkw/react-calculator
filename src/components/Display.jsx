import React, { Component } from 'react';
import './../style/Display.css';

class Display extends Component {
    render() { 
        var {input, output} = this.props
        if(output < 1 && output.toString().length > 7){
            output = output.toFixed(7);
        } else if(output > 1 && output.toString().length > 7){
            output = output.toPrecision(4);
        }
        return (
            <div id="display-wrapper">
                <span id="input">{input}</span>
                <span id="display">{output}</span>
            </div>
        );
    }
}

export default Display;