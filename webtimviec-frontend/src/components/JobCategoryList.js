import React, { Component } from 'react';

export default class JobCategoryList extends Component {
  render() {
    const { jobRequireProfessionJobList } = this.props;
    const jobCategoryList = jobRequireProfessionJobList.map(jrpj => {
      return (
      <li className="btn btn-outline-danger category-item">{jrpj.professionJob.professionJobName}</li>
      )
    })
    return (
      <ul className="category-list">
        {jobCategoryList}
      </ul>
    )
  }
}