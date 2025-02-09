import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps } from "react-router-dom";


/**
 * This is the Home/Dashboard page. Rendered for "/" route 
 * # It used <Piechart /> to display pie-chart on initial rendering. 
 * # When user clicks a sector of the pie-chart, it uses <CollegeFilter /> to display filtered list of colleges
 */

//import styles
import classes from './Dashboard.module.css';

//import action creators
import * as collegeActions from '../../store/colleges/actionCreators';


//import types
import { RootState } from "../../store/store";


//iimport components
import PieChart from '../../components/PieChart/PieChart';
import CollegeFilter from '../../components/CollegeFilter/CollegeFilter';

type PropsFromParents = {

}

const mapStateToProps = (state: RootState) => {
    return {
        statewiseStats: state.colleges.statewiseStats,
        coursewiseStats: state.colleges.coursewiseStats,
        collegesLoading: state.loadingState.FILTER_COLLEGES
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
    //tableRef is used to scrollIntoView() the table when filterd colleges are displayed. 
    tableRef: React.RefObject<HTMLInputElement>;

    constructor(props: AllProps) {
        super(props);
        this.state = {
            showStatewiseStats: false,
            showCoursewiseStats: false,
            filterCriteria: ''
        }
        this.tableRef = React.createRef();
    }

    componentDidMount() {
        //For rendering pie-chart based on the info
        this.props.onLoadStateWiseInfo();
        this.props.onLoadCourseWiseInfo();
    }

    piechartClickHandler = (filterBy: string, value: string) => {
        //When piechart clicked, the <CollegeFilter /> component renders a filtered list of colleges based on which sector clicked
        this.setState((state) => {
            return {
                showStatewiseStats: (filterBy === "state" ? true : false),
                showCoursewiseStats: (filterBy === "course" ? true : false),
                filterCriteria: value
            }
        })
    }

    componentDidUpdate() {
        //scroll and bring to view the list of filtered colleges
        this.tableRef.current?.scrollIntoView();
    }

    render() {
        return (
            <div className={classes["Container"]}>
                <h1 className={classes["title"]}>Statewise & Coursewise distribution of colleges(%)</h1>
                <div className={classes["piechart-container"]}>
                    <div className={classes["piechart-statewise"]}>
                        <PieChart data={this.props.statewiseStats && this.props.statewiseStats} type="state" sectorClicked={this.piechartClickHandler} />
                    </div>
                    <div className={classes["piechart-coursewise"]}>
                        <PieChart data={this.props.coursewiseStats && this.props.coursewiseStats} type="course" sectorClicked={this.piechartClickHandler} />
                    </div>
                </div>
                <div ref={this.tableRef}>
                    {this.state.showCoursewiseStats ? <CollegeFilter type="course" value={this.state.filterCriteria} /> : null}
                    {this.state.showStatewiseStats ? <CollegeFilter type="state" value={this.state.filterCriteria} /> : null}
                </div>
            </div>
        )
    }
}

export default connector(Dashboard);