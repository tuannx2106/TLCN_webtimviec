package com.tuannx.webtimviec.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tuannx.webtimviec.model.Identity.JobRequireProfessionJobId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="job_require_profession_job")
public class JobRequireProfessionJob implements Serializable {

    @EmbeddedId
    private JobRequireProfessionJobId jobRequireProfessionJobId;

    @MapsId("jobId")
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "job_id")
    private Job job;

    @MapsId("professionJobId")
    @ManyToOne
    @JoinColumn(name = "profession_job_id")
    private ProfessionJob professionJob;

}
