import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllJob from './pages/AllJob';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/tat-ca-cong-viec' exact={true} component={AllJob}/>
          <Route path='/tat-ca-cong-viec/:pjobid/:cityid' exact={true} component={AllJob}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
