import React, { PureComponent, Component } from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  PieChart, Pie, Cell, Legend
} from 'recharts';

//import styles
import classes from './PieChart.module.css';

//colors used for sectors of piechart and for the legend
const COLORS = ['#1abc9c', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#95a5a6', '#e74c3c', '#474787', '#FC427B', '#D6A2E8'];

type PropsFromParent = {
  //our piechart expects data in this format. Here name is the name of the sector(or the param that it represents) and 
  //value corresponds to the area that the sector occupies i.e the magnitude of the param
  data: {
    name: string,
    value: number
  }[],

  //type is needed because piechart can be statewise/coursewise. Also the corresponding legends change depending on the value of type. 
  type: string,

  //for triggering changes based on sector click. It changes state in parent <Dashboard /> component. 
  sectorClicked: (filterBy: string, value: string) => void
}

type State = {
  data: {
    name: string,
    value: number
  }[]
}

type AllProps = PropsFromParent & RouteComponentProps;

export class Piechart extends PureComponent<AllProps, State> {

  constructor(props: AllProps) {
    super(props);
    this.state = {
      data: []
    }
  }

  static getDerivedStateFromProps(props: AllProps) {
    //for piecharts to animate correctly we need to sync the state with props.  
    return {
      data: props.data
    }
  }


  render() {
    return (
      <div className="Container">
        <PieChart width={500} height={400} >
          <Pie
            data={this.state.data}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
          >
            {
              this.state.data.map((entry, index) => <Cell className={classes["sector"]} key={`cell-`} fill={COLORS[index % COLORS.length]} onClick={() => this.props.sectorClicked(this.props.type, entry.name)} />)
            }
          </Pie>
          <Legend align="right" layout="vertical" verticalAlign="middle" />
        </PieChart>
      </div>
    );
  }
}


export default withRouter(Piechart);