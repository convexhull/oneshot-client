import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

/**
 * This component displays the details of the selected student
 * 
 */

//import styles
import classes from './StudentDetails.module.css';


//import action creators
import * as studentActions from '../../store/students/actionCreators';


//import types
import { RootState } from "../../store/store";

//import images
import Spinner from "../../assets/images/Spinner.svg";



type PropsFromParents = {

}

const mapStateToProps = (state: RootState) => {
    return {
        studentDetails: state.students.fetchedStudent,
        loading: state.loadingState.FETCH_STUDENT_DETAILS
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
        //get studentId from the route param
        let studentId = this.props.match.params.studentId;
        this.props.onLoadStudentDetails(studentId);
    }

    render() {

        let spinner = (
            <div className={classes["main-spinner"]}>
                <img src={Spinner} alt="spinner" />
            </div>
        );

        let studentDetails = (
            <>
                <div className={classes["profile-info__profile-pic"]}>
                    <img
                        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__480.png"
                        alt="user's placeholder dp"
                    />
                </div>
                <div className={classes["profile-info__name-bio"]}>
                    <h1 className={classes["profile-info__name"]}>
                        {this.props.studentDetails.name}
                    </h1>
                    <h3 className={classes["profile-info__college"]}><span>Name of College:</span> {this.props.studentDetails.college[0] && this.props.studentDetails.college[0].name}</h3>
                    <h3 className={classes["profile-info__year"]}><span>Year of Batch:</span> {this.props.studentDetails.yearOfBatch}</h3>
                    <h3 className={classes["profile-info__skills"]}><span>Skills:</span> {this.props.studentDetails.skills.join(', ')}</h3>
                </div>
            </>
        )
        return (
            <div className={classes["Profile"]}>
                <div className={classes["profile-info"]}>
                    {this.props.loading ? spinner : studentDetails}
                </div>
            </div>
        )
    }
}

export default connector(withRouter(StudentDetails));