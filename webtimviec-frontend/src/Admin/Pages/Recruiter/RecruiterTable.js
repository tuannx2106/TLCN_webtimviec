import React, { Component } from 'react';
import '../../css/adminStyle.css';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar/index";


export default class RecruiterTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruiters: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('/admin/api/recruiter/list')
      .then(response => response.json())
      .then(data => this.setState({ recruiters: data, isLoading: false }));
  }

  async remove(id) {
    await fetch(`/admin/api/recruiter/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedRecruiter = [...this.state.recruiters].filter(i => i.id !== id);
      this.setState({ recruiters: updatedRecruiter });
    });
  }

  render() {
    const { recruiters } = this.state;
    const recruiterList = recruiters.map(r => {
      return <tr key={r.id}>
        <td>{r.companyName}</td>
        <td>{r.email}</td>
        <td>{r.address}</td>
        <td><img src={r.logo} alt="logo" class="logo-sm"></img></td>
        <td>{r.phone}</td>
        <td>
          <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <Link to={"/admin/recruiter/" + r.id}><button type="button" class="btn btn-primary btn-edit">Edit</button></Link>
            <button type="button" class="btn btn-danger" onClick={() => this.remove(r.id)}>Remove</button>
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
                <li class="breadcrumb-item active">Recruiter</li>
              </ol>

              <div class="card mb-3">
                <div class="card-header">
                  <i class="fas fa-table"></i>
                  Recruiter Table</div>
                <Link to="/admin/recruiter/new"><button type="button" class="btn btn-primary btn-add">Add</button></Link>
                <div class="card-body">
                  <div class="content table-responsive table-full-width">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Company Name</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Logo</th>
                          <th>Phone</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {recruiterList}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <p class="small text-center text-muted my-5">
                Manager Recruiters
            </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}