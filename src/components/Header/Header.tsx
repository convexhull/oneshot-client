import React from 'react';
import { Link } from "react-router-dom";


//import styles
import  classes from "./Header.module.css";

/**
 * This is the <Header /> component for showing navbar, side-drawer etc. 
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
            // <p className={classes["Container"]}><Link to="/"><i style={{"fontSize" : "3rem"}} className="fas fa-long-arrow-alt-left"></i>Dashboard</Link></p>
            <div className={classes["Container"]}>
                <Link to="/"><span><i style={{"fontSize" : "3rem"}} className="fas fa-home"></i></span></Link>
            </div>
        )
    }
}

export default Header;