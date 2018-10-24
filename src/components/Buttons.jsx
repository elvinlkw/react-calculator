import React, { Component } from 'react';
import './../style/Buttons.css';

class Buttons extends Component {
    isOperator(val){        
        var operator = ['×', '÷', '−', '+', '='];

        if(val === '0'){
            return 'col zero'
        } else if(operator.includes(val)){
            return 'col operator'
        }else{
            return 'col'
        }
    }

    render() { 
        return (
            <div className={`${this.isOperator(this.props.children)}`} onClick={()=>this.props.onClick(this.props.children)}>
                {this.props.children}
            </div>
        );
    }
}

export default Buttons;