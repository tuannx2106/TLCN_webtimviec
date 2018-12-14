import React, { Component } from 'react';
import JobCategoryList from '../components/JobCategoryList';
import {Link} from 'react-router-dom';

export default class Job extends Component {
  render() {
    const { id, logo, date, companyName, title, status, city, experience, jobRequireProfessionJobList, } = this.props;
    const jobStatus = `Trạng thái: ${status || 'pending'} | Kinh nghiệm: ${experience || '2 năm'} |  Vị trí: ${city || 'TPHCM'} | Ngày Đăng: ${date || ''} `;
    return (
      <div className="job-item table-display">
        <div className="job-image table-cell-display">
          <img src={logo || "images/fpt_logo.jpg"} alt="company-logo" className="logo image image-has-border-radius"></img>
        </div>
        <div className="job-content table-cell-display">
          <button className="job-button button is-red is-sm has-border-radius"><a href="/tat-ca-cong-viec">APPLY</a></button>
          <div className="job-title"><b><a href={"/job/"+id} className="link is-light-red">{title || 'Tuyển React Đâyyyyyy'}</a></b></div>
          <div className="company-name">{companyName || 'FPT'}</div>
          <div className="job-status">{jobStatus || 'Date: 01/01/2018 | Lương: 100$ | Vị trí: TPHCM'}</div>
          <JobCategoryList jobRequireProfessionJobList={jobRequireProfessionJobList}></JobCategoryList>
        </div>
      </div>
    )
  }
}