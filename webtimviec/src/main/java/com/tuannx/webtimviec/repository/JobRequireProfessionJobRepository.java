package com.tuannx.webtimviec.repository;

import com.tuannx.webtimviec.model.Identity.JobRequireProfessionJobId;
import com.tuannx.webtimviec.model.JobRequireProfessionJob;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRequireProfessionJobRepository extends JpaRepository<JobRequireProfessionJob,JobRequireProfessionJobId> {
}
