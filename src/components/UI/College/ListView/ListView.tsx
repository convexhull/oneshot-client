import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

/**
 * This component is for generating tabular/list view for colleges
 */


//import styles
import classes from './ListView.module.css';

//import types
import { RootState } from "../../../../store/store";



const mapStateToProps = (state: RootState) => {
    return {
        colleges: state.colleges.fetchedColleges
    }
}


const connector = connect(mapStateToProps);

type PropsFromParents = {

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

        let collegesToRender = this.props.colleges.map( (college) => (
            <li className={classes["list-item"]}>
                <p>{college.name}</p>
                <p>{college.yearFounded}</p>
                <p>{college.state}</p>
                <button onClick={() => this.btnClickHandler(college._id)}>VIEW</button>
            </li>
        ))
        return (
            <ul className={classes["Container"]}>
                {collegesToRender}
            </ul>
           
        )
    }
}

export default connector(withRouter(ListView));