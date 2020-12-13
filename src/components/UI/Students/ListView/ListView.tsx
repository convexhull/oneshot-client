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

        let studentsToRender = this.props.students.map( (student) => (
            <li className={classes["list-item"]}>
                <p className={classes["list-item__name"]}>{student.name}</p>
                <p className={classes["list-item__year"]}>{student.yearOfBatch}</p>
                <p className={classes["list-item__skills"]}>{student.skills.join(', ')}</p>
                <button className={classes["list-item__btn"]} ><Link to={`/student/${student._id}`}>View</Link></button>
            </li>
        ))

        return (
            <div className={classes["Container"]}>
                <ul className={classes["students-list"]}>
                    <li className={classes["list-item"]}>
                        <p className={classes["list-item__name"]}>Name</p>
                        <p className={classes["list-item__year"]}>Year of Batch</p>
                        <p className={classes["list-item__skills"]}>Skills</p>
                        <p className={classes["list-item__btn"]}></p>
                    </li>
                    {studentsToRender}
                </ul>   
            </div>
        )
    }
}

export default connector(withRouter(ListView));