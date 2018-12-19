import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class FormRegister extends Component {
  emptyItem = {
    id: '',
    name: "",
    dateOfBirth: "",
    email: "",
    password: "",
    address: "",
    cmnd: "",
    avatar: "",
    isAdmin: "false",
    isVerifyEmail: true
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

    await fetch('/admin/api/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/');
    console.log(item.dateOfBirth.substring(0, 10));
  }

  render() {
    const { item } = this.state;

    return (
      <div className="reg-wrapper">
        <div class="btn-group" role="group" aria-label="Basic example">
          <Link to="/register-user"><button type="button" class="btn btn-danger">Đăng ký làm thành viên</button></Link>
          <Link to="/register-recruiter"><button type="button" class="btn btn-secondary">Đăng ký làm nhà tuyển dụng</button></Link>
        </div>
        <div class="reg-form">
          <h1 className="reg-title">ĐĂNG KÝ THÀNH VIÊN</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="form-control" placeholder="VD: Nguyễn Văn A,..." onChange={this.handleChange} name="name" value={item.name || ''}></input>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email đùng làm tên đăng nhập" onChange={this.handleChange} name="email" value={item.email || ''}></input>
              </div>
              <div className="form-group col-md-6">
                <label>Password</label>
                <input type="password" className="form-control" onChange={this.handleChange} name="password" value={item.password || ''}></input>
              </div>
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" className="form-control" placeholder="VD: 1 Lê Thánh Tôn, p4, Tân Bình , TPCHM ..." onChange={this.handleChange} name="address" value={item.address || ''}></input>
            </div>
            <div className="form-group">
              <label>Avatar</label>
              <input type="text" className="form-control" placeholder="Dán link hình avatar bạn vào đây" onChange={this.handleChange} name="avatar" value={item.avatar || ''}></input>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label>Số CMND</label>
                <input type="text" className="form-control" onChange={this.handleChange} name="cmnd" value={item.cmnd || ''}></input>
              </div>
              <div className="form-group col-md-4">
                <label>Ngày Sinh</label>
                <input type="text" className="form-control" onChange={this.handleChange} placeholder=" Nhập đúng mẫu yyyy-mm-dd" name="dateOfBirth" value={item.dateOfBirth || ''}></input>
              </div>
              <div className="form-group col-md-4">
                <label>Ảnh Đại Diện</label>
                <img src={item.avatar || ''} class="fixed-avatar"></img>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Đăng Ký</button>
          </form>
        </div>
      </div >
    )
  }
}