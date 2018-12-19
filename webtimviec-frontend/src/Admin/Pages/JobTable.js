import React, { Component } from 'react';
import '../css/adminStyle.css';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';


export default class UserTablle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('/admin/api/job/list')
      .then(response => response.json())
      .then(data => this.setState({ jobs: data, isLoading: false }));
  }

  async remove(id) {
    await fetch(`/admin/api/job/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedJobs = [...this.state.jobs].filter(i => i.id !== id);
      this.setState({ jobs: updatedJobs });
    });
  }

  render() {
    const { jobs } = this.state;
    const jobList = jobs.map(j => {
      return <tr key={j.id}>
        <td>{j.title}</td>
        <td>{j.experience}</td>
        <td>{j.recruiter.companyName}</td>
        <td>{j.date.substring(0, 10)}</td>
        <td>{j.city.name}</td>
        <td>{j.status.statusName}</td>
        <td>
          <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <Link to={"/admin/job/" + j.id}><button type="button" class="btn btn-warning">Edit</button></Link>
            <button type="button" class="btn btn-danger" onClick={() => this.remove(j.id)}>Remove</button>
          </div>
        </td>
      </tr>
    });

    return (
      <div class="jobtable">
        <Header></Header>
        <div id="wrapper">
          <ul class="sidebar navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/admin/jobtable">
                <i class="fas fa-fw fa-table"></i>
                <span>Job</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/usertable">
                <i class="fas fa-fw fa-table"></i>
                <span>User</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/recruitertable">
                <i class="fas fa-fw fa-table"></i>
                <span>Recruiter</span></a>
            </li>
          </ul>

          <div id="content-wrapper">

            <div class="container-fluid">

              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">Job</li>
              </ol>

              <div class="card mb-3">
                <div class="card-header">
                  <i class="fas fa-table"></i>
                  Job Table</div>
                <Link to="/admin/job/new"><button type="button" class="btn btn-primary btn-add">Add Job</button></Link>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Experience</th>
                          <th>Company Name</th>
                          <th>Date</th>
                          <th>City</th>
                          <th>Status</th>
                          <th>Edit/Remove</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Title</th>
                          <th>Experience</th>
                          <th>Company Name</th>
                          <th>Date</th>
                          <th>City</th>
                          <th>Status</th>
                          <th>Edit/Remove</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {jobList}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
              </div>
              <p class="small text-center text-muted my-5">
                Quản lý công việc
            </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}