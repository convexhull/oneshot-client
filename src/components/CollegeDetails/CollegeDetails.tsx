import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

/**
 * This component displays the details of the selected college
 */

//import styles
import classes from './CollegeDetails.module.css';


//import action creators
import * as collegeActions from '../../store/colleges/actionCreators';


//import types
import { RootState } from "../../store/store";


//import components
import StudentsList from "../UI/Students/ListView/ListView";

type PropsFromParents = {

}

const mapStateToProps = (state: RootState) => {
    return {
        collegeDetails: state.colleges.fetchedCollegeDetails
    }
}

const mapDispatchToProps = {
    onFetchCollegeDetails: (collegeId: string) => collegeActions.asyncFetchCollegeDetailsStart(collegeId)
}


const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type RouteParams = {
    collegeId: string
}

type AllProps = PropsFromParents & PropsFromRedux & RouteComponentProps<RouteParams>;

type State = {

}

export class CollegeDetails extends React.Component<AllProps, State> {

    componentDidMount() {
        this.props.onFetchCollegeDetails(this.props.match.params.collegeId);
    }

    render() {
        return (
            <div className={classes["Container"]}>
                <div className={classes["college-info"]}>
                    <p>{this.props.collegeDetails.name}</p>
                </div>
                <div className={classes["students-list"]}>
                    <StudentsList students={this.props.collegeDetails.students} />
                </div>
            </div>
        )
    }
}


export default connector(withRouter(CollegeDetails));