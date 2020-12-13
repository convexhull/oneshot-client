import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

/**
 * This component displays the details of the selected student
 */

//import styles
import classes from './StudentDetails.module.css';


//import action creators
import * as studentActions from '../../store/students/actionCreators';


//import types
import { RootState } from "../../store/store";



type PropsFromParents = {

}

const mapStateToProps = (state: RootState) => {
    return {
        studentDetails: state.students.fetchedStudent
    }
}

const mapDispatchToProps = {
    onLoadStudentDetails: (studentId: string) => studentActions.asyncFetchStudentDetailsStart(studentId)
}


const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type RouteParams = {
    studentId: string
}

type AllProps = PropsFromParents & PropsFromRedux & RouteComponentProps<RouteParams>;

type State = {

}

export class StudentDetails extends React.Component<AllProps, State> {

    componentDidMount() {
        let studentId = this.props.match.params.studentId;
        this.props.onLoadStudentDetails(studentId);
    }

    render() {
        return (
            <div className={classes["Container"]}>
                <div>
                    {this.props.studentDetails.name}
                    {this.props.studentDetails.yearOfBatch}
                </div>
            </div>
        )
    }
}


export default connector(withRouter(StudentDetails));