import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


//import components
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './hoc/Layout/Default/Layout';
import CollegeDetails from './components/CollegeDetails/CollegeDetails';

function App() {
  return (
    <div className="App">
      <Layout>
      	<Switch>
          <Route path="/college" component={CollegeDetails} />
      	  <Route path="/" component={Dashboard} />
      	</Switch>
      </Layout>
    </div>
  );
}

export default App;
