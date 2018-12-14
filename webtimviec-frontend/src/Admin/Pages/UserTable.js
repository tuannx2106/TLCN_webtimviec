import React, { Component } from 'react';
import '../css/adminStyle.css';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';


export default class UserTablle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('/admin/api/users/list')
      .then(response => response.json())
      .then(data => this.setState({ users: data, isLoading: false }));
  }

  async remove(id) {
    await fetch(`/admin/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedUsers = [...this.state.users].filter(i => i.id !== id);
      this.setState({ users: updatedUsers });
    });
  }

  render() {
    const { users } = this.state;
    console.log(typeof (users));
    const userList = users.map(u => {
      return <tr key={u.id}>
        <td>{u.name}</td>
        <td>{u.email}</td>
        <td>{u.address}</td>
        <td>{u.cmnd}</td>
        <td>{u.dateOfBirth.substring(0,10)}</td>
        <td>{u.isAdmin}</td>
        <td>{u.isVerifyEmail}</td>
        <td>
          <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <Link to={"/admin/user/" + u.id}><button type="button" class="btn btn-warning">Edit</button></Link>
            <button type="button" class="btn btn-danger" onClick={() => this.remove(u.id)}>Remove</button>
          </div>
        </td>
      </tr>
    });

    return (
      <div class="usertable">
        <Header></Header>
        <div id="wrapper">
          <ul class="sidebar navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/admin/jobtable">
                <i class="fas fa-fw fa-table"></i>
                <span>Job</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/admin/usertable">
                <i class="fas fa-fw fa-table"></i>
                <span>User</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/recruitertable">
                <i class="fas fa-fw fa-table"></i>
                <span>Recruiter</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="tables4.html">
                <i class="fas fa-fw fa-table"></i>
                <span>Status</span></a>
            </li>
          </ul>

          <div id="content-wrapper">

            <div class="container-fluid">

              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">User</li>
              </ol>

              <div class="card mb-3">
                <div class="card-header">
                  <i class="fas fa-table"></i>
                  User Table</div>
                <Link to="/admin/user/new"><button type="button" class="btn btn-primary btn-add">Add User</button></Link>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>address</th>
                          <th>cmnd</th>
                          <th>DoB</th>
                          <th>Admin</th>
                          <th>Verify</th>
                          <th>Edit/Remove</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Name</th>
                          <th>Avatar</th>
                          <th>address</th>
                          <th>cmnd</th>
                          <th>DoB</th>
                          <th>Admin</th>
                          <th>Verify</th>
                          <th>Edit/Remove</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {userList}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
              </div>
              <p class="small text-center text-muted my-5">
                Quản lý người dùng
            </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}