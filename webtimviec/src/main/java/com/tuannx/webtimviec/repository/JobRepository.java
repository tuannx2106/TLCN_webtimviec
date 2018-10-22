package com.tuannx.webtimviec.repository;

import com.tuannx.webtimviec.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Integer> {
}
