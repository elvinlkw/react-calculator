import React, { Component } from 'react';
import './../style/Display.css';

class Display extends Component {
    render() { 
        var {input, output} = this.props
        return (
            <div id="display-wrapper">
                <span id="input">{input}</span>
                <span id="display">{output}</span>
            </div>
        );
    }
}

export default Display;