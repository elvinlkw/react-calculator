import React, { Component } from 'react';
import * as math from 'mathjs';
import Buttons from './Buttons';
import Display from './Display';
import './../style/App.css';

class App extends Component {
    constructor(props){
        super(props);  
        this.state={
            input: ''
        }
        this.addToDisplay = this.addToDisplay.bind(this);
        this.handleEqual = this.handleEqual.bind(this);
        this.clearAll = this.clearAll.bind(this);
    }
    clearAll(){
        this.setState({
            input: ''
        });
    }
    handleEqual(){
        this.setState({
            input: math.eval(this.state.input)
        })
    }
    addToDisplay(val){
        if(val === "×"){
            val = "*";
        } else if(val === "÷"){
            val = "/"
        } else if(val === "−"){
            val = "-"
        }
        this.setState({
            input: this.state.input + val
        });
    }
    render() { 
        var {input} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <Display input={input}/>
                </div>
                <div className="row" id="dummy">
                    <Buttons onClick={this.clearAll}>AC</Buttons>
                    <Buttons onClick={this.addToDisplay}>&plusmn;</Buttons>
                    <Buttons onClick={this.addToDisplay}>%</Buttons>
                    <Buttons onClick={this.addToDisplay}>&divide;</Buttons>
                </div>
                <div className="row">
                    <Buttons onClick={this.addToDisplay}>7</Buttons>
                    <Buttons onClick={this.addToDisplay}>8</Buttons>
                    <Buttons onClick={this.addToDisplay}>9</Buttons>
                    <Buttons onClick={this.addToDisplay}>&times;</Buttons>
                </div>
                <div className="row">
                    <Buttons onClick={this.addToDisplay}>4</Buttons>
                    <Buttons onClick={this.addToDisplay}>5</Buttons>
                    <Buttons onClick={this.addToDisplay}>6</Buttons>
                    <Buttons onClick={this.addToDisplay}>&minus;</Buttons>
                </div>
                <div className="row">
                    <Buttons onClick={this.addToDisplay}>1</Buttons>
                    <Buttons onClick={this.addToDisplay}>2</Buttons>
                    <Buttons onClick={this.addToDisplay}>3</Buttons>
                    <Buttons onClick={this.addToDisplay}>+</Buttons>
                </div>
                <div className="row">
                    <Buttons onClick={this.addToDisplay}>0</Buttons>
                    <Buttons onClick={this.addToDisplay}>.</Buttons>
                    <Buttons onClick={this.handleEqual}>=</Buttons>
                </div>
                
            </div>
        );
    }
}

export default App;