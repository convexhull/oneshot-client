import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


//import components
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './hoc/Layout/Default/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
      	<Switch>
      	  <Route path="/" component={Dashboard} />
      	</Switch>
      </Layout>
    </div>
  );
}

export default App;
