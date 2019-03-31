import React, { Component } from 'react';
import '../../css/adminStyle.css';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar/index";


class UserTablle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      isLoading: true,
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
        <td>{j.date}</td>
        <td>{j.recruiter.companyName}</td>
        <td>{j.city.name}</td>
        <td>{j.status.statusName}</td>
        <td>
          <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <Link to={"/admin/job/" + j.id}><button type="button" class="btn btn-primary btn-edit">Edit</button></Link>
            <button type="button" class="btn btn-danger" onClick={() => this.remove(j.id)}>Remove</button>
          </div>
        </td>
      </tr>
    });

    return (
      <div class="jobtable">
        <div id="wrapper">
          <Sidebar />
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
                  <b>Manager Jobs</b></div>
                <Link to="/admin/job/new"><button type="button" class="btn btn-primary btn-add">Add</button></Link>

                <div class="card-body">
                  <div class="content table-responsive table-full-width">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Experience</th>
                          <th>Date</th>
                          <th>Company</th>
                          <th>City</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {jobList}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <p class="small text-center text-muted my-5">
                Manager Jobs
            </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default UserTablle;