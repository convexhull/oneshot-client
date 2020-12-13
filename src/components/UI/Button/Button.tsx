import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.css';


type PropsFromParent = {
    children: React.ReactNode;
    clicked: () => void;
}

type AllProps = PropsFromParent;


class Button extends Component<AllProps> {

    render() {
        let btnClasses = [classes["btn"]];
        btnClasses.push(classes["btn--white"]);
        return (
           <button onClick={this.props.clicked} className={btnClasses.join(' ')} >{this.props.children}</button>
        );
    }
}



export default Button;