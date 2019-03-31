import React, { Component } from 'react';
import "../../css/adminStyle.css";
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar/index";
import StatusTable from "./StatusTable";

class SkillTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('/admin/api/skill/list')
      .then(response => response.json())
      .then(data => this.setState({ skills: data, isLoading: false }));
  }
  async remove(id) {
    await fetch(`/admin/api/skill/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedSkill = [...this.state.skills].filter(i => i.id !== id);
      this.setState({ skills: updatedSkill });
    });
  }
  render() {
    const { skills } = this.state;
    const skillList = skills.map(k => {
      return <tr key={k.id}>
        <td>{k.skillName}</td>
        <td>
          <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <Link to={"/admin/skill/" + k.id}><button type="button" class="btn btn-primary btn-edit">Edit</button></Link>
            <button type="button" class="btn btn-danger" onClick={() => this.remove(k.id)}>Remove</button>
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
                <li class="breadcrumb-item active">Skill - Status</li>
              </ol>
              <div class="card mb-3">
                <div class="card-header">
                  <i class="fas fa-table"></i>
                  Skill Table</div>
                <Link to="/admin/skill/new"><button type="button" class="btn btn-primary btn-add">Add Skill</button></Link>
                <div class="card-body">
                  <div class="content table-responsive table-full-width">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Skill Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {skillList}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Status */}
              <StatusTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillTable;