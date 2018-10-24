import React, { Component } from 'react';
import './../style/Display.css';

class Display extends Component {
    render() { 
        var {input} = this.props
        return (
            <div id="display-wrapper">
                <span id="display">{input}</span>
            </div>
        );
    }
}

export default Display;