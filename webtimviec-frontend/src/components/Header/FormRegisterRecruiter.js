import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class FormRegisterRecruiter extends Component {
  emptyItem = {
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
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/');
  }

  render() {
    const { item } = this.state;

    return (
      <div className="reg-wrapper bg-recruiter">
        <div class="btn-group" role="group" aria-label="Basic example">
          <Link to="/register-user"><button type="button" class="btn btn-danger">Đăng ký làm thành viên</button></Link>
          <Link to="/register-recruiter"><button type="button" class="btn btn-secondary">Đăng ký làm nhà tuyển dụng</button></Link>
        </div>
        <div class="reg-form">
          <h1 className="reg-title">ĐĂNG KÝ NHÀ TUYỂN DỤNG</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" className="form-control" placeholder="VD: FPT, KMS, ..." onChange={this.handleChange} name="companyName" value={item.companyName || ''}></input>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="VD: 1pac@1pac.vn" onChange={this.handleChange} name="email" value={item.email || ''}></input>
              </div>
              <div className="form-group col-md-6">
                <label>Password</label>
                <input type="password" className="form-control" onChange={this.handleChange} name="password" value={item.password || ''}></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Address</label>
                <input type="text" className="form-control" placeholder="VD: 1 Lê Thánh Tôn" onChange={this.handleChange} name="address" value={item.address || ''}></input>
              </div>
              <div className="form-group col-md-6">
                <label>Phone Number</label>
                <input type="text" className="form-control" onChange={this.handleChange} name="phone" value={item.phone || ''}></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-9">
                <label>logo</label>
                <input type="text" className="form-control" placeholder="Dán link hình Logo công ty vào đây" onChange={this.handleChange} name="logo" value={item.logo || ''}></input>
              </div>
              <div className="form-group col-md-3">
                <label>Image</label>
                <img src={item.logo || ''} class="fixed-avatar"></img>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Đăng Ký</button>
          </form>
        </div>
      </div >
    )
  }
}