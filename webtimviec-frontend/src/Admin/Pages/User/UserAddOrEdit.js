import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class UserAddOrEdit extends Component {
  emptyItem = {
    id: '',
    name: "",
    date_of_birth: "",
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

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const user = await (await fetch(`/admin/api/users/${this.props.match.params.id}`)).json();
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

  handClose = () => {
    this.props.history.push('/admin/usertable');
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { item } = this.state;

    await fetch('/admin/api/users', {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/admin/usertable');
  }

  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Edit User' : 'Add User'}</h2>;
    
    return (
      <div className="container user-edit">
        <h1 className="edit-title">{title}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="your name" onChange={this.handleChange} name="name" value={item.name || ''}></input>
            </div>
            <div className="form-group col-md-6">
              <label>email</label>
              <input type="email" className="form-control" placeholder="email" onChange={this.handleChange} name="email" value={item.email || ''}></input>
            </div>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" placeholder="1 Lê Thánh Tôn" onChange={this.handleChange} name="address" value={item.address || ''}></input>
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
              <input type="text" className="form-control" onChange={this.handleChange} placeholder=" Nhập đúng mẫu yyyy-mm-dd" name="date_of_birth" value={item.date_of_birth || ''}></input>
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
          <button type="submit" className="btn btn-primary">Save</button>
          <Link to="/admin/usertable"><button type="button" class="btn">Cancel</button></Link>
        </form>
      </div>
    )
  }
}
