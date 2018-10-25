import React, { Component } from 'react';
import * as math from 'mathjs';
import Buttons from './Buttons';
import Display from './Display';
import './../style/App.css';

class App extends Component {
    constructor(props){
        super(props);  
        this.state={
            input: '',
            output: 0,
            storage: 0
        }
        this.addToDisplay = this.addToDisplay.bind(this);
        this.handleEqual = this.handleEqual.bind(this);
        this.handleCharacter = this.handleCharacter.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.handleKeyboardInput = this.handleKeyboardInput.bind(this);
    }
    componentDidUpdate(){
        console.log(this.state)
    }
    clearAll(){
        // Reset all states when 'AC' key is pressed
        this.setState({
            input: '',
            output: 0,
            storage: 0
        });
    }
    handleCharacter(val){
        if(val === '%'){
            if(this.state.input === ''){
                this.setState({
                    output: 0,
                    storage: 0
                });
            } else{
                this.setState({
                    output: math.eval(this.state.input) / 100,
                    storage: math.eval(this.state.input) / 100
                });
            }
        }else{
            // Handler for pressing '+/-' key 
            if(this.state.storage[0] === '-'){
                this.setState({
                    input: this.state.storage.substr(1),
                    storage: this.state.storage.substr(1)
                })
            } else if(this.state.storage === 0){
                this.setState({
                    input: '-' + this.state.input,
                    storage: '-' + this.state.input
                });
            } else{
                this.setState({
                    input: '-' + this.state.storage,
                    storage: '-' + this.state.storage
                });
            }
        }
    }
    handleEqual(){
        var output = this.state.output;
        if(output < 1 && output.toString().length > 7){
            output = output.toFixed(7);
        } else if(output > 1 && output.toString().length > 7){
            output = output.toPrecision(4);
        }
        try{
            this.setState({
                output: math.eval(this.state.input),
                storage: math.eval(this.state.input).toString()
            });
        } catch(e){
            alert('Invalid Operation');
            this.setState({
                input: this.state.output,
                storage: this.state.output
            });
        }
        
    }
    addToDisplay(val){
        var operator = ['*', '/', '+', '-']
        if(val === "×"){
            val = "*";
        } else if(val === "÷"){
            val = "/"
        } else if(val === "−"){
            val = "-"
        }
        if(this.state.storage !== 0 && !operator.includes(val)){
            this.setState({
                input: val,
                storage: 0
            });
        } else if(this.state.storage === 0){
            this.setState({
                input: this.state.input + val
            });
        } else{
            this.setState({
                input: this.state.storage + val,
                storage: 0
            })
        }
    }
    handleKeyboardInput(kbInput){
        this.setState({
            input: kbInput
        });
    }
    render() { 
        var {input, output} = this.state;
        return (
            <div id="main">
                <div id="page-title">
                    <h1>Calculator App</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <Display input={input} output={output} onInput={this.handleKeyboardInput} handleEqual={this.handleEqual}/>
                    </div>
                    <div className="row">
                        <Buttons onClick={this.clearAll}>AC</Buttons>
                        <Buttons onClick={this.handleCharacter}>&plusmn;</Buttons>
                        <Buttons onClick={this.handleCharacter}>%</Buttons>
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
            </div>
        );
    }
}

export default App;