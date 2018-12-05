import React, { Component } from 'react';
import Job from '../components/Job';

export default class JobList extends Component {
  render() {
    const { jobs } = this.props;

    const jobList = jobs.map(job => {
      return <Job id={job.id} logo={job.recruiter.logo} companyName={job.recruiter.companyName}
        title={job.title} status={job.status.statusName} city={job.city.name} date={job.date}
        experience={job.experience} jobRequireProfessionJobList={job.jobRequireProfessionJobList}></Job>
    })

    return (
      <div class="job-list">
        {jobList}
      </div>
    )
  }
}