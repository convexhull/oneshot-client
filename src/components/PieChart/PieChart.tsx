import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Cell, Legend
} from 'recharts';


const COLORS = ['#1abc9c', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#95a5a6', '#e74c3c', '#474787'];

type PropsFromParent = {
  data: {
    name: string,
    value: number
  }[]
}

type State = {
  data: {
    name: string,
    value: number
  }[]
}

type AllProps = PropsFromParent;

export class Piechart extends PureComponent<AllProps, State> {

  static getDerivedStateFromProps(props: AllProps) {
    return {
      data: props.data
    }
  }

  render() {
    return (
      <PieChart width={800} height={400} >
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
          labelLine
        >
          {
            this.state.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Legend align="center" layout="vertical" verticalAlign="middle" />
      </PieChart>
    );
  }
}


export default Piechart;