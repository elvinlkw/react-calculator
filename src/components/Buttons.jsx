import React, { Component } from 'react';
import './../style/Buttons.css';

class Buttons extends Component {
    isOperator(val){        
        var operator = ['×', '÷', '−', '+', '='];
        var special = ['AC', '±', '%'];

        if(val === '0'){
            return ' zero'
        } else if(operator.includes(val)){
            return ' operator'
        } else if(special.includes(val)){
            return ' special'
        }
        else{
            return ''
        }
    }

    render() { 
        return (
            <div className={`col${this.isOperator(this.props.children)}`} onClick={()=>this.props.onClick(this.props.children)}>
                {this.props.children}
            </div>
        );
    }
}

export default Buttons;