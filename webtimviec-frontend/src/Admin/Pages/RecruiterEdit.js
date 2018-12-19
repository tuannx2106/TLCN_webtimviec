import React, { Component } from 'react';

export default class RecruiterEdit extends Component {
  emptyItem =  {
    id: null,
    companyName: "",
    logo: "",
    address: "",
    email: "",
    password: "",
    phone: "",
    verify: ""
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
      const user = await (await fetch(`/admin/api/recruiter/${this.props.match.params.id}`)).json();
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

    await fetch('/admin/api/recruiter', {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/admin/recruitertable');
  }

  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Edit Recrutier' : 'Add Recruiter'}</h2>;

    return (
      <div className="container user-edit">
        <h1 className="edit-title">{title}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Company Name</label>
              <input type="text" className="form-control" placeholder="your company name" onChange={this.handleChange} name="companyName" value={item.companyName || ''}></input>
            </div>
            <div className="form-group col-md-6">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Nhập email công ty" onChange={this.handleChange} name="email" value={item.email || ''}></input>
            </div>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" placeholder="VD: 1 Lê Thánh Tôn" onChange={this.handleChange} name="address" value={item.address || ''}></input>
          </div>
          <div className="form-group">
            <label>logo</label>
            <input type="text" className="form-control" placeholder="Dán link hình logo vào đây" onChange={this.handleChange} name="logo" value={item.avatar || ''}></input>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label>Phone Number</label>
              <input type="text" className="form-control" onChange={this.handleChange} name="phone" value={item.phone || ''}></input>
            </div>
            <div className="form-group col-md-4">
              <label>Password</label>
              <input type="password" className="form-control" onChange={this.handleChange} name="password" value={item.password || ''}></input>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck"></input>
              <label className="form-check-label" for="gridCheck">
                Xác Thực
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">{title}</button>
        </form>
      </div>
    )
  }
}
