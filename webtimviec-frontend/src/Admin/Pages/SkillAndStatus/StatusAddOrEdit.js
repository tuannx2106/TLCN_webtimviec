import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class StatusAddOrEdit extends Component {
    emptyItem = {
        id: null,
        statusName: "",
        kind:""
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const user = await (await fetch(`/admin/api/status/${this.props.match.params.id}`)).json();
            this.setState({ item: user });
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item: item });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        await fetch('/admin/api/status', {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/admin/skilltable');
    }

    render() {
        const { item } = this.state;
        const title = <h2>{item.id ? 'Edit Status' : 'Add Status'}</h2>;

        return (
            <div className="container user-edit">
                <h1 className="edit-title">{title}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        
                        <div className="form-group col-md-6">
                            <label>Kind</label>
                            <input type="text" className="form-control" placeholder="Kind" onChange={this.handleChange} name="kind" value={item.kind || ''}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Status Name</label>
                            <input type="text" className="form-control" placeholder="Status name" onChange={this.handleChange} name="statusName" value={item.statusName || ''}></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <Link to="/admin/skilltable"><button type="button" class="btn">Cancel</button></Link>
                </form>
            </div>
        )
    }
}
