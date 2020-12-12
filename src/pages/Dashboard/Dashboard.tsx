import React from 'react';
import { connect, ConnectedProps } from "react-redux";


//import action creators
import * as collegeActions from '../../store/colleges/actionCreators';


//import types
import { RootState } from "../../store/store";


//iimport components
import PieChart from '../../components/PieChart/PieChart';

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

type AllProps = PropsFromParents & PropsFromRedux;


type State = {
    
}

export class Dashboard extends React.Component<AllProps, State> {

    componentDidMount() {
        this.props.onLoadStateWiseInfo();
    }

    render() {
        console.log("xxx", this.props.statewiseStats);
        return (
            <div>
            	<h1>Dashboard</h1>
                <PieChart data={this.props.statewiseStats && this.props.statewiseStats} />
                {/* // <PieChart /> */}
            </div>
        )
    }
}


export default connector(Dashboard);