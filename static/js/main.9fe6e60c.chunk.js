(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,a){e.exports=a(598)},168:function(e,t,a){},592:function(e,t,a){},594:function(e,t,a){},596:function(e,t,a){},598:function(e,t,a){"use strict";a.r(t);var n=a(5),i=a.n(n),l=a(162),c=a.n(l),s=(a(168),a(57)),r=a(58),o=a(60),u=a(59),d=a(61),p=a(28),h=a(49),m=(a(592),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"isOperator",value:function(e){return"0"===e?"col zero":["\xd7","\xf7","\u2212","+","="].includes(e)?"col operator":"col"}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"".concat(this.isOperator(this.props.children)),onClick:function(){return e.props.onClick(e.props.children)}},this.props.children)}}]),t}(n.Component)),E=(a(594),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.input,a=e.output;return i.a.createElement("div",{id:"display-wrapper"},i.a.createElement("span",{id:"input"},t),i.a.createElement("span",{id:"display"},a))}}]),t}(n.Component)),k=(a(596),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={input:"",output:0,storage:0},a.addToDisplay=a.addToDisplay.bind(Object(p.a)(Object(p.a)(a))),a.handleEqual=a.handleEqual.bind(Object(p.a)(Object(p.a)(a))),a.handleCharacter=a.handleCharacter.bind(Object(p.a)(Object(p.a)(a))),a.clearAll=a.clearAll.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"clearAll",value:function(){this.setState({input:"",output:0})}},{key:"handleCharacter",value:function(e){"%"===e?this.setState({output:h.eval(this.state.input)/100,storage:h.eval(this.state.input)/100}):this.setState({output:"-"+h.eval(this.state.input),storage:"-"+h.eval(this.state.input)})}},{key:"handleEqual",value:function(){this.setState({output:h.eval(this.state.input),storage:h.eval(this.state.input)})}},{key:"addToDisplay",value:function(e){"\xd7"===e?e="*":"\xf7"===e?e="/":"\u2212"===e&&(e="-"),0===this.state.storage?this.setState({input:this.state.input+e}):this.setState({input:this.state.storage+e,storage:0})}},{key:"render",value:function(){var e=this.state,t=e.input,a=e.output;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement(E,{input:t,output:a})),i.a.createElement("div",{className:"row"},i.a.createElement(m,{onClick:this.clearAll},"AC"),i.a.createElement(m,{onClick:this.handleCharacter},"\xb1"),i.a.createElement(m,{onClick:this.handleCharacter},"%"),i.a.createElement(m,{onClick:this.addToDisplay},"\xf7")),i.a.createElement("div",{className:"row"},i.a.createElement(m,{onClick:this.addToDisplay},"7"),i.a.createElement(m,{onClick:this.addToDisplay},"8"),i.a.createElement(m,{onClick:this.addToDisplay},"9"),i.a.createElement(m,{onClick:this.addToDisplay},"\xd7")),i.a.createElement("div",{className:"row"},i.a.createElement(m,{onClick:this.addToDisplay},"4"),i.a.createElement(m,{onClick:this.addToDisplay},"5"),i.a.createElement(m,{onClick:this.addToDisplay},"6"),i.a.createElement(m,{onClick:this.addToDisplay},"\u2212")),i.a.createElement("div",{className:"row"},i.a.createElement(m,{onClick:this.addToDisplay},"1"),i.a.createElement(m,{onClick:this.addToDisplay},"2"),i.a.createElement(m,{onClick:this.addToDisplay},"3"),i.a.createElement(m,{onClick:this.addToDisplay},"+")),i.a.createElement("div",{className:"row"},i.a.createElement(m,{onClick:this.addToDisplay},"0"),i.a.createElement(m,{onClick:this.addToDisplay},"."),i.a.createElement(m,{onClick:this.handleEqual},"=")))}}]),t}(n.Component));c.a.render(i.a.createElement(k,null),document.getElementById("root"))}},[[163,2,1]]]);
//# sourceMappingURL=main.9fe6e60c.chunk.js.map