import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";

/**
 * This component is for generating tabular/list view for students
 */


//import styles
import classes from './ListView.module.css';

//import types
import { RootState } from "../../../../store/store";
import { Student } from "../../../../store/students/types";



const mapStateToProps = (state: RootState) => {
    return {
        colleges: state.colleges.fetchedColleges
    }
}


const connector = connect(mapStateToProps);

type PropsFromParents = {
    students: Student[]
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type AllProps = PropsFromParents & PropsFromRedux & RouteComponentProps;

type State = {

}

class ListView extends React.Component<AllProps, State>  {


    render() {

        let studentsToRender = this.props.students.map((student, idx) => (
            <div className={classes["list-item"]}>
                <p className={classes["list-item__srn"]}>{idx+1}</p>
                <p className={classes["list-item__name"]}><Link to={`/student/${student._id}`}><p>{student.name}</p></Link></p>
                <p className={classes["list-item__year"]}>{student.yearOfBatch}</p>
                <p className={classes["list-item__skills"]}>{student.skills.join(', ')}</p>
                <Link to={`/student/${student._id}`}><p className={classes["view-btn"]}>View</p></Link>
            </div>
        ))

        return (
            <div className={classes["Container"]}>
                <div className={classes["students-list"]}>
                    <div className={classes["list-description"]}>
                        <p className={classes["list-description__title"]}>Students</p>
                        <p className={classes["list-description__subtitle"]}>Detailed list of students</p>
                    </div>
                    <div className={classes["list-item"] + " " + classes["col-names"]}>
                        <p className={classes["list-item__srn"]}>Sr no.</p>
                        <p className={classes["list-item__name"]}>Name</p>
                        <p className={classes["list-item__year"]}>Year of Batch</p>
                        <p className={classes["list-item__skills"]}>Skills</p>
                        <p className={classes["list-item__btn"]}></p>
                    </div>
                    {studentsToRender}
                </div>
            </div>
        )
    }
}

export default connector(withRouter(ListView));