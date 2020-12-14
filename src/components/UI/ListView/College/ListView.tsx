import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";

/**
 * This component is for generating tabular/list view for colleges
 * 
 */


//import styles
import classes from './ListView.module.css';

//import types
import { RootState } from "../../../../store/store";

//import images
import Spinner from '../../../../assets/images/Spinner.svg';


const mapStateToProps = (state: RootState) => {
    return {
        colleges: state.colleges.fetchedColleges,
        loading: state.loadingState.FILTER_COLLEGES || state.loadingState.FETCH_SIMILAR_COLLEGES
    }
}


const connector = connect(mapStateToProps);

type PropsFromParents = {
    type: string,
    value: string,

    //current collegeId is optional and required for not displaying the current college in list of similar colleges
    currentCollegeId?: string
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type AllProps = PropsFromParents & PropsFromRedux & RouteComponentProps;

type State = {

}

class ListView extends React.Component<AllProps, State>  {
    

    btnClickHandler = (collegeId: string) => {
        this.props.history.push(`/college/${collegeId}`)
    }

    render() {
        //fileredColleges removes the current colleges from similar college list
        let filteredColleges = this.props.colleges.filter((college) => college._id !== this.props.currentCollegeId);
        let spinner = (
            <div className={classes["spinner"]}>
                <img src={Spinner} alt="spinner" />
            </div>
        );
        let collegesToRender: React.ReactNode = null;
        if (!filteredColleges.length) {
            //if no similar college
            collegesToRender = (
                <div className={classes["list-item"]}>
                    <p>No similar colleges found</p>
                </div>
            )
        } else {
            collegesToRender = filteredColleges.map((college, idx) => (
                <div className={classes["list-item"]}>
                    <p className={classes["list-item__srn"]}>{idx + 1}</p>
                    <p className={classes["list-item__name"]}><Link to={`/college/${college._id}`}><p>{college.name}</p></Link></p>
                    <p className={classes["list-item__year"]}>{college.yearFounded}</p>
                    <p className={classes["list-item__skills"]}>{college.courses.join(', ')}</p>
                    <Link to={`/college/${college._id}`}><p className={classes["view-btn"]}>View</p></Link>
                </div>
            ))
        }
        let tableTitle = "";
        if (this.props.type === "similar") {
            tableTitle = "Similar colleges";
        } else {
            tableTitle = "Filtered list of colleges";
        }
        let tableSubtitle = "";
        if (this.props.type === "state") {
            tableSubtitle = `List of colleges in ${this.props.value}`;
        } else if (this.props.type === "course") {
            tableSubtitle = `List of colleges offering the course: ${this.props.value}`;
        } else {
            tableSubtitle = "Similar colleges in the same locality";
        }
        let listView = (
            <div className={classes["colleges-list"]}>
                <div className={classes["list-description"]}>
                    <p className={classes["list-description__title"]}>{tableTitle}</p>
                    <p className={classes["list-description__subtitle"]}>{tableSubtitle}</p>
                </div>
                <div className={classes["list-item"] + " " + classes["col-names"]}>
                    <p className={classes["list-item__srn"]}>Sr no.</p>
                    <p className={classes["list-item__name"]}>Name</p>
                    <p className={classes["list-item__year"]}>Year Est.</p>
                    <p className={classes["list-item__skills"]}>Courses</p>
                    <p className={classes["list-item__btn"]}></p>
                </div>
                {collegesToRender}
            </div>
        );
        return (
            <div className={classes["Container"]}>
                { this.props.loading ? spinner : listView}
            </div>
        )
    }
}

export default connector(withRouter(ListView));