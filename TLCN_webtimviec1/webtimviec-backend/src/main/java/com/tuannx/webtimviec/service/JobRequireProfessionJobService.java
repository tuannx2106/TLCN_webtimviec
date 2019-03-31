package com.tuannx.webtimviec.service;

import com.tuannx.webtimviec.model.JobRequireProfessionJob;
import com.tuannx.webtimviec.repository.JobRequireProfessionJobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobRequireProfessionJobService {

    @Autowired
    JobRequireProfessionJobRepository jobRequireProfessionJobRepository;

    public List<JobRequireProfessionJob> findAll() {
        return jobRequireProfessionJobRepository.findAll();
    }
}
