package com.tuannx.webtimviec.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "profession_job")
public class ProfessionJob implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name="pjobname")
    private String professionJobName;

    @ManyToOne
    @JoinColumn(name="parent_id")
    private ProfessionJob professionJob;

    @JsonIgnore
    @OneToMany(mappedBy = "professionJob",orphanRemoval = true)
    private List<ProfessionJob> professionJobChildList;

    @JsonIgnore
    @OneToMany(mappedBy = "professionJob")
    private List<JobRequireProfessionJob> jobRequireProfessionJobList;


}
