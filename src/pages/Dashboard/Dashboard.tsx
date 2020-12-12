import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { Link, Route, RouteComponentProps } from "react-router-dom";


//import action creators
import * as collegeActions from '../../store/colleges/actionCreators';


//import types
import { RootState } from "../../store/store";


//iimport components
import PieChart from '../../components/PieChart/PieChart';
import CollegeStats from '../../components/CollegeStats/CollegeStats';

type PropsFromParents = {
    
}

const mapStateToProps = (state: RootState) => {
    return {
        statewiseStats: state.colleges.statewiseStats
    }
}

const mapDispatchToProps = {
    onLoadCollegeInfo: () => collegeActions.asyncFetchAllCollegesStart(),
    onLoadStateWiseInfo: () => collegeActions.asyncFetchStatewiseStatsStart()
}


const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type AllProps = PropsFromParents & PropsFromRedux & RouteComponentProps;


type State = {
    
}

export class Dashboard extends React.Component<AllProps, State> {

    componentDidMount() {
        this.props.onLoadStateWiseInfo();
    }

    render() {
        return (
            <div>
            	<h1>Dashboard</h1>
                <Link to={{pathname: "/coursewise", search: "?course=civil"}}>course</Link>
                <Link to={{pathname: "/statewise", search: "?state=UP"}}>state</Link>
                <PieChart data={this.props.statewiseStats && this.props.statewiseStats} />
                <Route exact path={`/statewise`} component={CollegeStats} />
                <Route exact path={`/coursewise`} component={CollegeStats} />
            </div>
        )
    }
}


export default connector(Dashboard);