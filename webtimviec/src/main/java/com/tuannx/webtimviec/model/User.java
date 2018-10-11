package com.tuannx.webtimviec.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "date_of_birth")
    private Date date_of_birth;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "address")
    private String address;

    @Column(name = "cmnd")
    private String cmnd;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "is_admin")
    private String isAdmin;

    @Column(name = "del_flag")
    private Boolean delFlag = false;

    @Column(name = "isverifyemail")
    private Boolean isVerifyEmail = false;
}
