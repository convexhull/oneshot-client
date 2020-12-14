import React from 'react';


/**
 * This higher-order component sets a default layout for the whole app.
 * # It is essentially a wrapper around {props.children}
 */


//import styles
import classes from './Layout.module.css';

//import components
import Header from '../../../components/Header/Header';


const Layout = (props: { children: JSX.Element }) => {
    return (
        <div className={classes["Container"]}>
            <div className={classes["header"]}>
                <Header />
            </div>
            {props.children}
        </div>
    )
}

export default Layout;