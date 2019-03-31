package com.tuannx.webtimviec.controller.admin;

import com.tuannx.webtimviec.model.Job;
import com.tuannx.webtimviec.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/admin/api/job")
public class JobController {

    @Autowired
    JobService jobService;

    //show List
    @RequestMapping(value = "/list",
            method = RequestMethod.GET,
            produces = { MediaType.APPLICATION_JSON_VALUE })
    @ResponseBody
    public List<Job> getJobList() {
        List<Job> list = jobService.findAll();
        return list;
    }

    //Find particular
    @RequestMapping(value = "/{jobId}", //
            method = RequestMethod.GET, //
            produces = { MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public Optional<Job> getJob(@PathVariable("jobId") String jobId) {
        return jobService.getJob(Integer.valueOf(jobId));
    }

    //Add
    @RequestMapping(value = "", //
            method = RequestMethod.POST, //
            produces = { MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public Job addJob(@RequestBody Job job) {
        job.setId(null);
        jobService.saveJob(job);
        return job;
    }

    //Edit
    @RequestMapping(value = "", //
            method = RequestMethod.PUT, //
            produces = { MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public Job updateJob(@RequestBody Job job) {
        jobService.saveJob(job);
        return job;
    }

    //Delete
    @RequestMapping(value = "/{jobId}", //
            method = RequestMethod.DELETE, //
            produces = { MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public void deleteJob(@PathVariable("jobId") String jobId) {
        jobService.deleteJob(Integer.valueOf(jobId));
    }

}
