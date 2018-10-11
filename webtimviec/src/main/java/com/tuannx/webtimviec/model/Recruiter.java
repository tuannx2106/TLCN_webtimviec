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
@Table(name = "recruiter")
public class Recruiter implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "logo")
    private String logo;

    @Column(name = "address")
    private String address;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "verify")
    private Boolean verify = false;

    @Column(name = "del_flag")
    private Boolean delFlag = false;

}
