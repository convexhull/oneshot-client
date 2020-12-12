import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

/**
 * This component displays the details of the selected college
 */

//import styles
import classes from './CollegeDetails.module.css';


//import action creators
// import * as collegeActions from '../../store/colleges/actionCreators';


//import types
import { RootState } from "../../store/store";


type PropsFromParents = {

}

const mapStateToProps = (state: RootState) => {
    return {
    }
}

const mapDispatchToProps = {
}


const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type AllProps = PropsFromParents & PropsFromRedux & RouteComponentProps;

type State = {

}

export class CollegeDetails extends React.Component<AllProps, State> {

    
    render() {
        return (
            <div className={classes["Container"]}>
                <h1>College Details</h1>
            </div>
        )
    }
}


export default connector(withRouter(CollegeDetails));