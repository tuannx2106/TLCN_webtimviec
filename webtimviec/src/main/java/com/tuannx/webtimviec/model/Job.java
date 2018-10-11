package com.tuannx.webtimviec.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "job")
public class Job implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "company_id")
    private Integer id;

    @Column(name = "jobname")
    private String jobName;

    @Column(name = "expired")
    private String expired;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "experience")
    private String experience;

    @Column(name = "status_id")
    private String status;

    @Column(name = "city_id")
    private String city;

    @Column(name = "del_flag")
    private String delFlag;




}
