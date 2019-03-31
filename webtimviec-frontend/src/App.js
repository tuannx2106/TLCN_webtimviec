import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllJob from './pages/AllJob';
import Home from './pages/Home';
import JobInfo from './pages/JobInfo';
import UserTable from '../src/Admin/Pages/User/UserTable';
import UserEdit from './Admin/Pages/User/UserAddOrEdit';
import JobTable from './Admin/Pages/Job/JobTable';
import JobEdit from './Admin/Pages/Job/JobAddOrEdit';
import RecruiterTable from './Admin/Pages/Recruiter/RecruiterTable';
import RecruiterAddOrEdit from './Admin/Pages/Recruiter/RecruiterAddOrEdit';
import AdminLogin from './Admin/Pages/Login/AdminLogin';
import FormRegister from './components/Header/FormRegister';
import FormRegisterRecruiter from './components/Header/FormRegisterRecruiter';
import SkillTable from './Admin/Pages/SkillAndStatus/SkillTable';
import SkillAddOrEdit from "./Admin/Pages/SkillAndStatus/SkillAddOrEdit";
import StatusAddOrEdit from './Admin/Pages/SkillAndStatus/StatusAddOrEdit';

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
          <Route path='/admin/recruiter/:id' exact={true} component={RecruiterAddOrEdit}/>
          <Route path='/admin/skilltable' exact={true} component={SkillTable}/>
          <Route path='/admin/skill/:id' exact={true} component={SkillAddOrEdit} />
          <Route path='/admin/status/:id' exact={true} component= {StatusAddOrEdit} />
          <Route path='/admin/' exact={true} component={AdminLogin}/>
          <Route path='/register-user' exact={true} component={FormRegister}/>
          <Route path='/register-recruiter' exact={true} component={FormRegisterRecruiter}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
