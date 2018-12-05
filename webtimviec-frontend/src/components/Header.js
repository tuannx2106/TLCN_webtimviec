import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
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
                <a className="nav-link" href="#">Login</a>
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