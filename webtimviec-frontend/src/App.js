import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllJob from './pages/AllJob';
import Home from './pages/Home';
import JobInfo from './pages/JobInfo';
import UserTable from '../src/Admin/Pages/UserTable';
import UserEdit from './Admin/Pages/UserEdit';
import JobTable from './Admin/Pages/JobTable';
import JobEdit from './Admin/Pages/JobEdit';
import RecruiterTable from './Admin/Pages/RecruiterTable';
import RecruiterEdit from './Admin/Pages/RecruiterEdit';
import AdminLogin from './Admin/Pages/AdminLogin';
import FormRegister from './components/Header/FormRegister';
import FormRegisterRecruiter from './components/Header/FormRegisterRecruiter';

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
          <Route path='/admin/jobtable' exact={true} component={JobTable}/>
          <Route path='/admin/job/:id' exact={true} component={JobEdit}/>
          <Route path='/admin/recruitertable' exact={true} component={RecruiterTable}/>
          <Route path='/admin/recruiter/:id' exact={true} component={RecruiterEdit}/>
          <Route path='/admin/' exact={true} component={AdminLogin}/>
          <Route path='/register-user' exact={true} component={FormRegister}/>
          <Route path='/register-recruiter' exact={true} component={FormRegisterRecruiter}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
