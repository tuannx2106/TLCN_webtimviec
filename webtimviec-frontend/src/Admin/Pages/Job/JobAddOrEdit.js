import React, { Component } from 'react';

export default class JobAddOrEdit extends Component {
  emptyItem = {
    id: null,
    expired: "",
    title: "",
    description: "",
    experience: "",
    date: "",
    recruiter: "",
    city: "",
    status: "",
    jobRequireProfessionJobList: [
      {
        jobRequireProfessionJobId: {
          jobId: '',
          professionJobId: 1
        },
      }
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem,
      citys: [],
      status: [],
      recruiter: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const job = await (await fetch(`/admin/api/job/${this.props.match.params.id}`)).json();
      this.setState({ item: job });
    }

    await fetch('/admin/api/city/list')
      .then(response => response.json())
      .then(data => this.setState({ citys: data }));

    await fetch('/admin/api/status/list')
      .then(response => response.json())
      .then(data => this.setState({ status: data }));

    await fetch('/admin/api/recruiter/list')
      .then(response => response.json())
      .then(data => this.setState({ recruiter: data }));
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item: item });
  }

  handleChangeSelect(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = {
      id: value
    };
    this.setState({ item: item });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { item } = this.state;
    // const curDay = new Date();
    // let date = curDay.getFullYear() + "-" + (curDay.getMonth() + 1) + "-" + ((curDay.getDate().toString().length < 2) ? '0' + curDay.getDate() : curDay.getDate());
    // item.date = date; 
    await fetch('/admin/api/job', {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/admin/jobtable');
  }

  render() {
    const { item, status, citys, recruiter } = this.state;
    const title = <h2>{item.id ? 'Edit Job' : 'Add Job'}</h2>;
    // const date = item.date.substring(0, 10);

    const statusOptionList = status.map(tus => {
      return (
        <option value={tus.id}>{tus.statusName}</option>
      )
    })

    const cityOptionList = citys.map(city => {
      return (
        <option value={city.id}>{city.name}</option>
      )
    })

    const recruiterOptionList = recruiter.map(re => {
      return (
        <option value={re.id}>{re.companyName}</option>
      )
    })

    return (
      <div className="container user-edit">
        <h1 className="edit-title">{title}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-10">
              <label>Title</label>
              <input type="text" className="form-control" placeholder="Job Title" onChange={this.handleChange} name="title" value={item.title || ''}></input>
            </div>
            <div className="form-group col-md-2">
              <label>Experience</label>
              <input type="text" className="form-control" placeholder="year" onChange={this.handleChange} name="experience" value={item.experience || ''}></input>
            </div>
            <div className="form-group col-md-2">
              <label>Date</label>
              <input type="text" className="form-control" placeholder="date" onChange={this.handleChange} name="date" value={item.date || ''}></input>
            </div>
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.handleChange} name="description" value={item.description || ''}></textarea>
          </div>
          <div className="form-group">
            <label>Recruiter</label>
            <select id="selectRecruiter" class="form-control" name="recruiter" onChange={this.handleChangeSelect}>
              <option selected>Công ty...</option>
              {recruiterOptionList}
            </select>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>City</label>
              <select id="selectRecruiter" class="form-control" name="city" onChange={this.handleChangeSelect}>
                <option selected>Địa Điểm...</option>
                {cityOptionList}
              </select>
            </div>
            <div className="form-group col-md-6">
              <label>Status</label>
              <select id="selectRecruiter" class="form-control" name="status" onChange={this.handleChangeSelect}>
                <option selected> Trạng Thái...</option>
                {statusOptionList}
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}
