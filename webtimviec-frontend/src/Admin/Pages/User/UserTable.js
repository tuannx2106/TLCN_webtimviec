import React, { Component } from 'react';
import '../../css/adminStyle.css';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar/index";


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
    const userList = users.map(u => {
      return <tr key={u.id}>
        <td>{u.name}</td>
        <td>{u.email}</td>
        <td>{u.address}</td>
        <td>{u.cmnd}</td>
        <td>{u.date_of_birth}</td>
        <td>{u.isAdmin}</td>
        <td><img src={u.avatar} alt="logo" class="logo-sm"></img></td>
        <td>
          <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <Link to={"/admin/user/" + u.id}><button type="button" class="btn btn-primary btn-edit">Edit</button></Link>
            <button type="button" class="btn btn-danger" onClick={() => this.remove(u.id)}>Remove</button>
          </div>
        </td>
      </tr>
    });

    return (
      <div class="usertable">
        <div id="wrapper">
          <Sidebar />
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
                <Link to="/admin/user/new"><button type="button" class="btn btn-primary btn-add">Add</button></Link>
                <div class="card-body">
                <div class="content table-responsive table-full-width">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>CMND</th>
                          <th>BirthDay</th>
                          <th>Admin</th>
                          <th>Avatar</th>
                          <th>Edit/Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userList}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <p class="small text-center text-muted my-5">
                Manager User
            </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}