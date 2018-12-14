import React, { Component } from 'react';
import Job from '../components/Job';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

class JobInfo extends Component {
  defaultJob = {
    id: 0,
    expired: "2019/1/30",
    title: "Tuyển Quản Trị Mạng Nội Bộ Trường Đại Học",
    description: "Yêu cầu kinh nghiệm trên 2 năm",
    experience: "2",
    date: "2018-12-03",
    recruiter: {
      id: 2,
      companyName: "Sư Phạm Kỹ Thuật",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Hcmute.svg/200px-Hcmute.svg.png",
      address: "1 Võ Văn Ngân",
      email: "abc@gmail.com",
      phone: "028354455",
      verify: true
    },
    city: {
      id: 3,
      name: "Đà Nẵng"
    },
    status: {
      id: 1,
      statusName: "Available",
      kind: "job"
    },
    jobRequireProfessionJobList: [
      {
        jobRequireProfessionJobId: {
          jobId: 4,
          professionJobId: 1
        },
        professionJob: {
          id: 1,
          professionJobName: "Công Nghệ Thông Tin"
        }
      }
    ]
  }

  constructor(props) {
    super(props);
    this.state = { jobItem: this.defaultJob };
  }

  async componentDidMount() {
    const job = await (await fetch(`/api/job/${this.props.match.params.id}`)).json();
    this.setState({ jobItem: job });
  }

  render() {
    const { jobItem } = this.state;

    return (
      <div className="JobInfo">
      <Header></Header>
        <section class="job-info-header">
          <div class="container">
            <div class="job">
              <Job id={jobItem.id} logo={jobItem.recruiter.logo} companyName={jobItem.recruiter.companyName}
                title={jobItem.title} status={jobItem.status.statusName} city={jobItem.city.name} date={jobItem.date}
                experience={jobItem.experience} jobRequireProfessionJobList={jobItem.jobRequireProfessionJobList}></Job>
            </div>
          </div>
        </section>
        <section className="job-info-main">
          <div className="container">
            <div className="main">
              <div className="row">
                <div className="col-md-8">
                  <div className="description">
                    <h2 className="header">Mô Tả Công Việc</h2>
                    <p>{jobItem.description}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="job-property">
                    <table className="table-property">
                      <tr>
                        <td className="prop-td">
                          <div className="row">
                            <div className="col-sm-3">
                              <img src="\images\icon\icon-date.png" alt="icDate" className="image"></img>
                            </div>
                            <div className="col-sm-9">
                              <div>
                                <p>Ngày Đăng:</p>
                              </div>
                              <div>
                                <p>{jobItem.date}</p>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="prop-td">
                          <div className="row">
                            <div className="col-sm-3">
                              <img src="\images\icon\icon-4.png" alt="icDate" className="image"></img>
                            </div>
                            <div className="col-sm-9">
                              <div>
                                <p>Vị Trí:</p>
                              </div>
                              <div>
                                <p>{jobItem.city.name}</p>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="prop-td">
                          <div className="row">
                            <div className="col-sm-3">
                              <img src="\images\icon\icon-position.png" alt="icDate" className="image"></img>
                            </div>
                            <div className="col-sm-9">
                              <div>
                                <p>Lương:</p>
                              </div>
                              <div>
                                <p>20000</p>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="prop-td">
                          <div className="row">
                            <div className="col-sm-3">
                              <img src="\images\icon\icon-salary.png" alt="icDate" className="image"></img>
                            </div>
                            <div className="col-sm-9">
                              <div>
                                <p>Kinh Nghiệm:</p>
                              </div>
                              <div>
                                <p>{jobItem.experience} năm</p>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <img src="\images\jobpage\banner-bottom.png" alt="banner" className="image"></img>
          </div>
        </section>
      <Footer></Footer>
      </div>
    )
  }
}

export default JobInfo;