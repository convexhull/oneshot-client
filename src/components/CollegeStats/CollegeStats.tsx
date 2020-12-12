import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

/**
 * This component is responsible for filtering colleges based on chosen criteria ( state/ courses)
 */

//import styles
import classes from './CollegeStats.module.css';


//import components
import ListView from '../UI/College/ListView/ListView';

//import action creators
import * as collegeActions from '../../store/colleges/actionCreators';


//import types
import { RootState } from "../../store/store";


type PropsFromParents = {

}

const mapStateToProps = (state: RootState) => {
    return {
        colleges: state.colleges.fetchedColleges
    }
}

const mapDispatchToProps = {
    onFilterColleges: (criteria: string, value: string) => collegeActions.asyncFilterCollegesStart(criteria, value)
}


const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type AllProps = PropsFromParents & PropsFromRedux & RouteComponentProps;

type State = {

}

export class Dashboard extends React.Component<AllProps, State> {

    componentDidMount() {
        if(this.props.location.pathname === "/statewise") {
            this.props.onFilterColleges("state", "UP");
        } else {
            this.props.onFilterColleges("course", "civil");
        }
    }

    render() {
        return (
            <div className={classes["Container"]}>
                <ListView />
            </div>
        )
    }
}


export default connector(withRouter(Dashboard));