import React, { Component } from 'react';
import ModalLogin from "./ModalLogin";
import './modalLogin.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showModalLogin: false,
      test: 1
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    console.log(this.state.test);
  }

  showModal = () => {
    this.setState({ showModalLogin: true });
  };

  hideModal = () => {
    this.setState({ showModalLogin: false, test:2 });
    console.log(this.state.test);
  };

  render() {
    return (
      <header>
        <ModalLogin show={this.state.showModalLogin}>
          <h1 className="title">Đăng nhập</h1>
          <form>
          <input type="radio" name="gender" value="male" checked/> Người Dùng
          <input type="radio" name="gender" value="female"/> Nhà Tuyển Dụng
          <p>Email</p>
          <input className="input-login"></input>
          <p>Password</p>
          <input className="input-login"></input>
          <button className="button is-red has-border-radius is-xs">Đăng Nhập</button>
          <button className="button is-red is-xs has-border-radius" onClick={this.hideModal}>Thoát</button>
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={this.showModal}>Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Register</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}