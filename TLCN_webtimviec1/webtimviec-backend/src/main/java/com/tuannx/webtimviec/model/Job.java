package com.tuannx.webtimviec.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.Calendar;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "job")
public class Job implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "expired")
    private String expired;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "experience")
    private String experience;

    @Column(name = "date")
    private String date ;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="recruiter_id")
    private Recruiter recruiter;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="city_id")
    private City city;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="status_id")
    private Status status;

    @JsonIgnore
    @OneToMany(mappedBy = "job")
    private List<UsersJob> userJobList;

    @JsonIgnore
    @OneToMany(mappedBy = "job")
    private List<JobRequireSkill> jobRequireSkillList;

//    @JsonIgnore
    @OneToMany(mappedBy = "job")
    private List<JobRequireProfessionJob> jobRequireProfessionJobList;
}
