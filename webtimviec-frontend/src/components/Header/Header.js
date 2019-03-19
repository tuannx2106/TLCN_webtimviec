import React, { Component } from 'react';
import ModalLogin from "./ModalLogin";
import './modalLogin.css';

export default class Header extends Component {
  emptyLoginInfo = {
    email: "",
    password: ""
  }

  emptyUser = {
    id: null
  }

  constructor(props) {
    super(props);
    this.state = {
      showModalLogin: false,
      loginInfo: this.emptyLoginInfo,
      curentUser: this.emptyUser,
      isUser : 'user'
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  componentDidMount() {
    const curUser = JSON.parse(localStorage.getItem('currentUser'));
    this.setState({ curentUser: curUser });
    console.log(curUser);
  }

  showModal = () => {
    this.setState({ showModalLogin: true });
  };

  hideModal = () => {
    this.setState({ curentUser: this.emptyUser, showModalLogin: false });
    localStorage.setItem("currentUser",JSON.stringify(this.emptyUser));
  };

  logOut() {
    localStorage.setItem("currentUser",JSON.stringify(this.emptyUser));
    this.setState({curentUser: this.emptyUser})
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let { loginInfo } = this.state;
    loginInfo[name] = value;
    this.setState({ loginInfo: loginInfo });
  }

  handleRadioChange(event) {
    const target = event.target;
    const value = target.value;
    let {isUser} = this.state;
    isUser = value;
    this.setState({isUser: isUser});
    console.log(value);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { loginInfo, isUser } = this.state;

    if(isUser === 'user') {
    await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginInfo)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ curentUser: data, showModalLogin: false })
        localStorage.setItem('currentUser', JSON.stringify(data));
      });
    } else {
      await fetch('/api/recruiter/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      })
        .then(response => response.json())
        .then(data => {
          this.setState({ curentUser: data, showModalLogin: false })
          localStorage.setItem('currentUser', JSON.stringify(data));
        });
    }

  }

  render() {
    const { loginInfo, curentUser } = this.state;
    const afterLogin = (this.state.curentUser != null) ?
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Xin Chào <img src={curentUser.avatar || curentUser.logo} alt="avatar" class="avatar-rounded"></img> {curentUser.name || curentUser.companyName}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Quản Lý Tài Khoản</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={this.logOut}>Thoát</a>
        </li>
      </ul> : <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={this.showModal}>Đăng nhập</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/register-user">Đăng ký</a>
        </li>
      </ul>

    return (
      <header>
        <ModalLogin show={this.state.showModalLogin}>
          <h1 className="title">Đăng nhập</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="radio" name="isUser" value="user" onChange={this.handleRadioChange} checked={this.state.isUser === 'user'}></input>
            <span> Người Dùng    </span>
            <input type="radio" name="isUser" value="recruiter" onChange={this.handleRadioChange}></input>
            <span> Nhà Tuyển Dụng</span>
            <p>Email</p>
            <input type="text" className="input-login" name="email" value={loginInfo.email || ''} onChange={this.handleChange}></input>
            <p>Password</p>
            <input type="password" className="input-login" name="password" value={loginInfo.password || ''} onChange={this.handleChange}></input>
            <button type="submit" className="button is-red has-border-radius is-xs">Đăng Nhập</button>
            <a className="button is-red is-xs has-border-radius" onClick={this.hideModal}>Thoát</a>
          </form>
        </ModalLogin>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand" href="/">NXT</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNavDropdown" className="navbar-collapse collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/tat-ca-cong-viec">Tất Cả Việc làm <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>

            </ul>
            {afterLogin}
          </div>
        </nav>
      </header>
    )
  }
}