import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


//import components
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './hoc/Layout/Default/Layout';
import CollegeDetails from './pages/CollegeDetails/CollegeDetails';
import StudentDetails from './pages/StudentDetails/StudentDetails';
import Page404 from './pages/Page404/Page404';



type State = {

}

type PropsFromParent = {

}

type AllProps = PropsFromParent;


export class App extends React.Component<AllProps, State> {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Dashboard} />

            <Route exact path="/college/:collegeId" component={CollegeDetails} />
            <Route exact path="/student/:studentId" component={StudentDetails} />
            <Route component={Page404} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
