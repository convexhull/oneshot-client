import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";


/**
 * This component displays the details of the selected college
 */

//import images
import Spinner from '../../assets/images/Spinner.svg';

//import styles
import classes from './CollegeDetails.module.css';


//import action creators
import * as collegeActions from '../../store/colleges/actionCreators';


//import types
import { RootState } from "../../store/store";


//import components
import StudentsList from "../UI/Students/ListView/ListView";
import CollegesList from "../UI/College/ListView/ListView";
import Button from "../UI/Button/Button";

type PropsFromParents = {

}

const mapStateToProps = (state: RootState) => {
    return {
        collegeDetails: state.colleges.fetchedCollegeDetails,
        collegeDetailsLoading: state.loadingState.FETCH_COLLEGE_DETAILS
    }
}

const mapDispatchToProps = {
    onFetchCollegeDetails: (collegeId: string) => collegeActions.asyncFetchCollegeDetailsStart(collegeId),
    onFetchSimilarColleges: (city: string, courses: string[]) => collegeActions.asyncFetchSimilarCollegesStart(city, courses)
}


const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type RouteParams = {
    collegeId: string
}

type AllProps = PropsFromParents & PropsFromRedux & RouteComponentProps<RouteParams>;

type State = {
    showSimilarColleges: boolean;
}

export class CollegeDetails extends React.Component<AllProps, State> {

    state = {
        showSimilarColleges: false
    }

    componentDidMount() {
        this.props.onFetchCollegeDetails(this.props.match.params.collegeId);
    }
    

    componentDidUpdate(prevProps: AllProps) {
        if(this.props.match.params.collegeId !== prevProps.match.params.collegeId){
            this.props.onFetchCollegeDetails(this.props.match.params.collegeId);
        }
    }

    viewSimilarHandler = () => {
        this.props.onFetchSimilarColleges(this.props.collegeDetails.city, this.props.collegeDetails.courses);
        this.setState((state) => {
            return {
                showSimilarColleges: !state.showSimilarColleges
            }
        })
    }

    render() {
        let mainSpinner = (
            <div className={classes["main-spinner"]}>
                <img src={Spinner} alt="spinner" />
            </div>
        );


        let collegeDetails = (
            <>
                <div className={classes["college-info"]}>
                    <div className={classes["clg-img"]}>
                        <div className={classes["clg-img__overlay"]}>
                            <div className={classes["college-info__basic"]}>
                                <p className={classes["college-info__name"]}>{this.props.collegeDetails.name}</p>
                                <p className={classes["college-info__location"]}><span><i className="fas fa-map-marker-alt"></i></span> {this.props.collegeDetails.city}</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes["college-description"]}>
                        <p className={classes["college-description__year"]}>Year Founded: {this.props.collegeDetails.yearFounded}</p>
                        <div className={classes["college-description__other-info"]}>
                            <div className={classes["college-description__loc-info"]}>
                                <p className={classes["college-description__location-text"]}>Location</p>
                                <div className={classes["college-description__location"]}>
                                    <p className={classes["college-description__city"]}>City: {this.props.collegeDetails.city}</p>
                                    <p className={classes["college-description__state"]}>State: {this.props.collegeDetails.state}</p>
                                    <p className={classes["college-description__country"]}>Country: {this.props.collegeDetails.country}</p>
                                </div>
                            </div>
                            <div className={classes["college-description__courses-info"]}>
                                <p className={classes["college-description__courses-text"]}>Courses</p>
                                <div className={classes["college-description__courses"]}>
                                    {this.props.collegeDetails.courses.map((course) => (
                                        <p className={classes["college-description__course"]}>{course}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    <div className={classes["similar-clg-btn"]}>   
                        <Button clicked={this.viewSimilarHandler}>{this.state.showSimilarColleges ? "Hide" : "Show"} similar colleges</Button>
                    </div>
                    </div>
                </div>
                <div className={classes["students-list"]}>
                    {this.state.showSimilarColleges ? <CollegesList type="similar" value={this.props.collegeDetails.city} /> : null }
                </div>
                <div className={classes["students-list"]}>
                    <StudentsList students={this.props.collegeDetails.students} />
                </div>
            </>
        )

        return (
            <div className={classes["Container"]}>
                {this.props.collegeDetailsLoading ? mainSpinner : collegeDetails }
            </div>
        )
    }
}


export default connector(withRouter(CollegeDetails));