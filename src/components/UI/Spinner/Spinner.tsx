import React from 'react';

//import styles
import classes from './Spinner.module.css';


class Spinner extends React.Component {
    render() {
        return (
            <div className={classes["sk-cube-grid"]}>
                <div className={classes["sk-cube sk-cube1"]}></div>
                <div className={classes["sk-cube sk-cube2"]}></div>
                <div className={classes["sk-cube sk-cube3"]}></div>
                <div className={classes["sk-cube sk-cube4"]}></div>
                <div className={classes["sk-cube sk-cube5"]}></div>
                <div className={classes["sk-cube sk-cube6"]}></div>
                <div className={classes["sk-cube sk-cube7"]}></div>
                <div className={classes["sk-cube sk-cube8"]}></div>
                <div className={classes["sk-cube sk-cube9"]}></div>
            </div>
        )
    }
}

export default Spinner;