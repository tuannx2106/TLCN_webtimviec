import React, { Component } from 'react';

export default class AdminLogin extends Component {
  emptyLoginInfo = {
    email: "",
    password: ""
  }

  constructor(props) {
    super(props);
    this.state = {
      loginInfo: this.emptyLoginInfo
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let {loginInfo} = this.state;
    loginInfo[name] = value;
    this.setState({ loginInfo: loginInfo });
  }

  async handleSubmit(event) {
    event.preventDefault();
    let login = this.state.loginInfo;
    if (login.email === "a" && login.password === "a") {
      this.props.history.push('/admin/jobtable');
    } else {
      
    }
  }

  render() {
    const {loginInfo} = this.state;

    return (
      <div class="admin-login-page">
        <div class="login-box">
          <form onSubmit={this.handleSubmit}> 
            <h1 class="edit-title">Admin</h1>     
            <div className="form-group">
              <label class="lable-admin"><b>User</b></label>
              <input type="text" className="form-control" name="email" value={loginInfo.email || ''} onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
              <label class="lable-admin"><b>Password</b></label>
              <input type="password" className="form-control" name="password" value={loginInfo.password || ''} onChange={this.handleChange}></input>
            </div>
            <button type="submit" className="btn btn-primary btn-admin">Login</button>
          </form>
        </div>
      </div>
    )
  }
}