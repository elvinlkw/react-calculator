import React, { Component } from 'react';
import './../style/Display.css';

class Display extends Component {
    componentDidMount(){
        this.refs.inputField.focus();
    }
    componentDidUpdate(){
        this.refs.inputField.focus();
    }
    render() { 
        var {input, output} = this.props

        var handleChange = (event) => {
            this.props.onInput(event.target.value);
        }

        var handleEnter = (event) => {
            if(event.key === 'Enter'){
                this.props.handleEqual();
                
            }
        }

        return (
            <div id="display-wrapper">
                <input ref="inputField" id="input" value={input} onChange={(e)=>handleChange(e)} onKeyPress={(e)=>handleEnter(e)}/>
                <span id="display">{output}</span>
            </div>
        );
    }
}

export default Display;