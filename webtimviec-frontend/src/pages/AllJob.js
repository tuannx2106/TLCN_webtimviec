import React, { Component } from 'react';
import '../css/App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import FilterNav from '../components/FilterNav';
import JobList from '../components/JobList';
import CategoryTable from '../components/CategoryTable';
import SearchBar from '../components/SearchBar';

class AllJob extends Component {
  defaultJobs = [{
    logo: 'images/fpt_logo.jpg',
    recruiter: {
      logo: 'images/fpt_logo.jpg'
    },
    status: {
      statusName: "pending"
    },
    city: {
      name: "TPHCM"
    }
  }];

  dfCitys = [{
    id: 1,
    name: "test lun nè"
  }];

  dfPfs = [{
    id: 2,
    professionJobName: "test nè"
  }];

  constructor(props) {
    super(props);
    this.state = {
      jobs: this.defaultJobs,
      citys: this.dfCitys,
      professions: this.dfPfs,
      selectedCity: 1,
      selectedProfession: 1,
      isLoading: true
    };
    this.handleOnLocationChange = this.handleOnLocationChange.bind(this);
    this.handleOnProfessionChange = this.handleOnProfessionChange.bind(this);
    this.onClickFilterByProfession = this.onClickFilterByProfession.bind(this);
    this.onClickSearch = this.onClickSearch.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('api/job/list')
      .then(response => response.json())
      .then(data => this.setState({ jobs: data, isLoading: false }));

    fetch('admin/api/city/list')
      .then(response => response.json())
      .then(data => this.setState({ citys: data }));

    fetch('admin/api/profession/list')
      .then(response => response.json())
      .then(data => this.setState({ professions: data }));
  }

  handleOnLocationChange(e) {
    this.setState({ selectedCity: e.target.value });
    console.log(this.state.selectedCity);
  }

  handleOnProfessionChange(e) {
    this.setState({ selectedProfession: e.target.value });
    console.log(this.state.selectedProfession);
  }

  onClickFilterByProfession(e) {
    const professionId = e.target.dataset.pfsid;
    const api = `api/job/list/${professionId}`;
    console.log(professionId);
    fetch(api)
      .then(response => response.json())
      .then(data => this.setState({ jobs: data }));
  }

  onClickSearch(e) {
    const api = `api/job/list/${this.state.selectedProfession}/${this.state.selectedCity}`;
    fetch(api)
      .then(response => response.json())
      .then(data => this.setState({ jobs: data, isLoading: false }));
  }

  render() {
    const { jobs, citys, professions, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="AllJob">
        <Header></Header>
        <section className="section-col">
          <div className="title">Tất Cả Công Việc</div>
          <div className="container">
            <SearchBar citys={citys} handleOnLocationChange={this.handleOnLocationChange}
              professions={professions} handleOnProfessionChange={this.handleOnProfessionChange}
              onClickSearch={this.onClickSearch}></SearchBar>
          </div>
        </section>
        <section className="section-job-list">
          <div class="container">
            <FilterNav></FilterNav>
            <div className="row">
              <div className="col-sm-3">
                <CategoryTable professions={professions} onClickFilterByProfession={this.onClickFilterByProfession}></CategoryTable>
                <img src="images\joblist\adver-side-1.png" alt="ad1" class="image margin-top-bottom-sm"></img>
                <img src="images\joblist\adver-side-2.png" alt="ad1" class="image margin-top-bottom-sm"></img>
              </div>
              <div className="col-sm-9">
                <JobList jobs={jobs}></JobList>
                <div class="section-col">
                  <img src="images\joblist\adver-bottom-1.png" alt="ad1" class="image"></img>
                  <img src="images\joblist\adver-bottom-2.png" alt="ad1" class="image margin-top-bottom-sm"></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}

export default AllJob;
