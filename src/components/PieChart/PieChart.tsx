import React, { PureComponent, Component } from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  PieChart, Pie, Cell, Legend
} from 'recharts';

//import styles
import classes from './PieChart.module.css';


const COLORS = ['#1abc9c', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#95a5a6', '#e74c3c', '#474787'];

type PropsFromParent = {
  data: {
    name: string,
    value: number
  }[],
  type: string,
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

  static getDerivedStateFromProps(props: AllProps) {
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