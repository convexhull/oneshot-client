import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { Link, Route, RouteComponentProps } from "react-router-dom";


//import action creators
import * as collegeActions from '../../store/colleges/actionCreators';


//import types
import { RootState } from "../../store/store";


//iimport components
import PieChart from '../../components/PieChart/PieChart';
import CollegeStats from '../../components/CollegeFilter/CollegeStats';

type PropsFromParents = {
    
}

const mapStateToProps = (state: RootState) => {
    return {
        statewiseStats: state.colleges.statewiseStats,
        coursewiseStats: state.colleges.coursewiseStats
    }
}

const mapDispatchToProps = {
    onLoadStateWiseInfo: () => collegeActions.asyncFetchStatewiseStatsStart(),
    onLoadCourseWiseInfo: () => collegeActions.asyncfetchCoursewiseStatsStart()
}


const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type AllProps = PropsFromParents & PropsFromRedux & RouteComponentProps;


type State = {
    showStatewiseStats: boolean;
    showCoursewiseStats: boolean;
    filterCriteria: string;
}

export class Dashboard extends React.Component<AllProps, State> {

    state = {
        showStatewiseStats: false,
        showCoursewiseStats: false,
        filterCriteria: ''
    }

    componentDidMount() {
        this.props.onLoadStateWiseInfo();
        this.props.onLoadCourseWiseInfo();
    }

    piechartClickHandler = (filterBy: string, value: string) => {
        this.setState( (state) => {
            return {
                showStatewiseStats: (filterBy === "state" ? true : false),
                showCoursewiseStats: (filterBy === "course" ? true : false),
                filterCriteria: value
            }
        })
    }

    render() {
        return (
            <div>
            	<h1>Dashboard</h1>
                <PieChart data={this.props.statewiseStats && this.props.statewiseStats} type="state" sectorClicked={this.piechartClickHandler} />
                <PieChart data={this.props.coursewiseStats && this.props.coursewiseStats} type="course" sectorClicked={this.piechartClickHandler} />
                {this.state.showStatewiseStats ? <CollegeStats type="state" value={this.state.filterCriteria} /> : null }
                {this.state.showCoursewiseStats ? <CollegeStats type="course" value={this.state.filterCriteria} /> : null }
            </div>
        )
    }
}


export default connector(Dashboard);