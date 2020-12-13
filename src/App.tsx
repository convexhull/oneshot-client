import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


//import components
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './hoc/Layout/Default/Layout';
import CollegeDetails from './components/CollegeDetails/CollegeDetails';
import StudentDetails from './components/StudentDetails/StudentDetails';

function App() {
  return (
    <div className="App">
      <Layout>
      	<Switch>
          <Route exact path="/college/:collegeId" component={CollegeDetails} />
          <Route path="/student/:studentId" component={StudentDetails} />
      	  <Route path="/" component={Dashboard} />
      	</Switch>
      </Layout>
    </div>
  );
}

export default App;
