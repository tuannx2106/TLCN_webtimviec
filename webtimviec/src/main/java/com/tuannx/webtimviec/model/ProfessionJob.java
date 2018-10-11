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
    private Integer id;

    @Column(name="pjobname")
    private String professionJobName;

    @ManyToOne
    @JoinColumn(name="parent_id")
    private ProfessionJob professionJob;

    @JsonIgnore
    @OneToMany(mappedBy = "professionJob",orphanRemoval = true)
    private List<ProfessionJob> professionJobChildList= new ArrayList<>();

    @Column(name="del_flag")
    private Boolean delFlag= false;

    public ProfessionJob(String professionJobName, ProfessionJob professionJob, List<ProfessionJob> professionJobChildList) {
        this.professionJobName = professionJobName;
        this.professionJob = professionJob;
        this.professionJobChildList = professionJobChildList;
    }
}
