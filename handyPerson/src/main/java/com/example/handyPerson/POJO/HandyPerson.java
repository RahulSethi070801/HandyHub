package com.example.handyPerson.POJO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HandyPerson {

    private Integer HandyPersonId;
    private String FirstName;
    private String LastName;
    private String ContactNumber;
    private String City;
    private String State;
    private Float AverageRating;
    private Float Price;
    private String Description;

}
