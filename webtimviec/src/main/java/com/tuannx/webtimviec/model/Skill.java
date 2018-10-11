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
public class Skill implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "company_id")
    private Integer id;

    @Column(name = "skillname")
    private String skillName;

    @Column(name = "del_flag")
    private String delFlag;

    public Skill(String skillName) {
        this.skillName = skillName;
    }
}
