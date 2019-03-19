package com.tuannx.webtimviec.model.Identity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class JobRequireProfessionJobId implements Serializable {

    private Integer jobId;
    private Integer professionJobId;
}
