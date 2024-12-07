package com.example.handyPerson.POJO;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
public class HandyPerson {

    private Integer HandyPersonId;
    @JsonProperty("FirstName")
    private String FirstName;
    @JsonProperty("LastName")
    private String LastName;
    @JsonProperty("ContactNumber")
    private String ContactNumber;

    @JsonProperty("EmailAddress")
    private String EmailAddress;

    @JsonProperty("Address")
    private String Address;
    @JsonProperty("City")
    private String City;
    @JsonProperty("State")
    private String State;
    @JsonProperty("Country")
    private String Country;
    private Float AverageRating;
    private Float Price;
    private String Description;

    @JsonProperty("PostalCode")
    private String PostalCode;


    public String getEmailAddress() {
        return EmailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        EmailAddress = emailAddress;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }


    public String getPostalCode() {
        return PostalCode;
    }

    public void setPostalCode(String postalCode) {
        PostalCode = postalCode;
    }

    public String getCountry() {
        return Country;
    }

    public void setCountry(String country) {
        Country = country;
    }

    public Integer getHandyPersonId() {
        return HandyPersonId;
    }

    public void setHandyPersonId(Integer handyPersonId) {
        HandyPersonId = handyPersonId;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getContactNumber() {
        return ContactNumber;
    }

    public void setContactNumber(String contactNumber) {
        ContactNumber = contactNumber;
    }

    public String getCity() {
        return City;
    }

    public void setCity(String city) {
        City = city;
    }

    public String getState() {
        return State;
    }

    public void setState(String state) {
        State = state;
    }

    public Float getAverageRating() {
        return AverageRating;
    }

    public void setAverageRating(Float averageRating) {
        AverageRating = averageRating;
    }

    public Float getPrice() {
        return Price;
    }

    public void setPrice(Float price) {
        Price = price;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }


}
