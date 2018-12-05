import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar';

class Home extends Component {

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
      citys: this.dfCitys,
      professions: this.dfPfs,
      selectedCity: 1,
      selectedProfession: 1,
      isLoading: true
    };
    this.handleOnLocationChange = this.handleOnLocationChange.bind(this);
    this.handleOnProfessionChange = this.handleOnProfessionChange.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('admin/api/city/list')
      .then(response => response.json())
      .then(data => this.setState({ citys: data, isLoading: false }));

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

  render() {
    const { citys, professions, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="HomePage">
        <Header></Header>
        <section className="section-banner">
          <div className="title">
            <p><b>Job Finder</b></p>
            <p>Hãy tìm công việc mong muốn của bạn</p>
          </div>
        </section>
        <section className="section-col">
          <div className="title">Hãy Tìm Công Việc Ngay Bây Giờ</div>
          <div className="container">
            <SearchBar citys={citys} handleOnLocationChange={this.handleOnLocationChange}
              professions={professions} handleOnProfessionChange={this.handleOnProfessionChange}></SearchBar>
          </div>
        </section>
        <section className="section-col">
          <div className="container">
            <div className="title"><b>Các Nhà Tuyển Dụng Hàng Đầu</b></div>
            <div className="row">
              <div className="col-md-2">
                <img src="images\index\offer_1.png" alt="offer1" className="offer image"></img>
              </div>
              <div className="col-md-2">
                <img src="images\index\offer_2.png" alt="offer1" className="offer image"></img>
              </div>
              <div className="col-md-2">
                <img src="images\index\offer_3.png" alt="offer1" className="offer image"></img>
              </div>
              <div className="col-md-2">
                <img src="images\index\offer_4.png" alt="offer1" className="offer image"></img>
              </div>
              <div className="col-md-2">
                <img src="images\index\offer_5.png" alt="offer1" className="offer image"></img>
              </div>
              <div className="col-md-2">
                <img src="images\index\offer_6.png" alt="offer1" className="offer image"></img>
              </div>
            </div>
          </div>
        </section>
        <section className="section-col">
          <div className="container">
            <div className="title"><b>Các Kênh Việc Làm Của Chúng Tôi</b></div>
            <div className="row">
              <div className="col-md-4">
                <img src="images\index\bussiness_1.png" alt="offer1" className="offer image"></img>
              </div>
              <div className="col-md-4">
                <img src="images\index\bussiness_2.png" alt="offer1" className="offer image"></img>
              </div>
              <div className="col-md-4">
                <img src="images\index\bussiness_3.png" alt="offer1" className="offer image"></img>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    )
  }
}

export default Home;