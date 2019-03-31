import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class StatusTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: [],
            isLoading: true
        }
    }
    componentDidMount() {
        fetch('/admin/api/status/list')
            .then(response => response.json())
            .then(data => this.setState({ status: data, isLoading: false }));
    }
    async remove(id) {
        await fetch(`/admin/api/status/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedStatus = [...this.state.status].filter(i => i.id !== id);
            this.setState({ status: updatedStatus });
        });
    }
    render() {
        const { status } = this.state;
        const statusList = status.map(s => {
            return <tr key={s.id}>
                <td>{s.kind}</td>
                <td>{s.statusName}</td>
                <td>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <Link to={"/admin/status/" + s.id}><button type="button" class="btn btn-primary btn-edit">Edit</button></Link>
                        <button type="button" class="btn btn-danger" onClick={() => this.remove(s.id)}>Remove</button>
                    </div>
                </td>
            </tr>
        });
        return (
            <div class="card mb-3">
                <div class="card-header">
                    <i class="fas fa-table"></i>
                    Status Table</div>
                <Link to="/admin/status/new"><button type="button" class="btn btn-primary btn-add">Add Status</button></Link>
                <div class="card-body">
                    <div class="content table-responsive table-full-width">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Kind</th>
                                    <th>Status Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {statusList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatusTable;