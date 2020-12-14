import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

/**
 * This component is responsible for filtering colleges based on chosen criteria ( state / courses)
 * # It is imported into <Dashboard /> for displaying filtered colleges statewise/coursewise.
 * # It uses the <ListView /> child component to display the fetched data. 
 */

//import styles
import classes from './CollegeFilter.module.css';


//import components
import ListView from '../UI/ListView/College/ListView';

//import action creators
import * as collegeActions from '../../store/colleges/actionCreators';


//import types
import { RootState } from "../../store/store";


type PropsFromParents = {
    //type === "state" indicates we want to filter colleges statewise
    //value === "UP" indicates that we want to filter statewise for the state UP
    type: string;
    value: string;
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
        //dispatch action to load fetch similar colleges and store in redux store
        this.props.onFilterColleges(this.props.type, this.props.value);
    }

    componentDidUpdate(prevProps: AllProps, prevState: State) {
        //to make sure that colleges are fetched on every update of type/value and not just on mounting
        if (prevProps.type !== this.props.type || prevProps.value !== this.props.value) {
            this.props.onFilterColleges(this.props.type, this.props.value);
        }
    }

    render() {
        return (
            <div className={classes["Container"]}>
                <div className={classes["college-list"]}>
                    <ListView type={this.props.type} value={this.props.value} />
                </div>
            </div>
        )
    }
}


export default connector(withRouter(Dashboard));