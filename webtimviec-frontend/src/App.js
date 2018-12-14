import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllJob from './pages/AllJob';
import Home from './pages/Home';
import JobInfo from './pages/JobInfo';
import UserTable from '../src/Admin/Pages/UserTable';
import UserEdit from './Admin/Pages/UserEdit';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/tat-ca-cong-viec' exact={true} component={AllJob}/>
          <Route path='/job/:id' exact={true} component={JobInfo}/>
          <Route path='/admin/usertable' exact={true} component={UserTable}/>
          <Route path='/admin/user/:id' exact={true} component={UserEdit}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
