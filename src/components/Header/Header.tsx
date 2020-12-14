import React from 'react';
import { Link } from "react-router-dom";


//import styles
import classes from "./Header.module.css";

/**
 * This is the <Header /> component for showing navbar, home link etc. 
 * # Its imported into <Layout /> HOC
 */


type PropsFromParents = {

}

type AllProps = PropsFromParents;


type State = {

}

export class Header extends React.Component<AllProps, State> {

    render() {
        return (
            <div className={classes["Container"]}>
                <Link to="/"><span><i style={{ "fontSize": "3rem" }} className="fas fa-home"></i></span></Link>
            </div>
        )
    }
}

export default Header;