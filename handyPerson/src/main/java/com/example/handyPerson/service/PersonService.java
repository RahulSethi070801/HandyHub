package com.example.handyPerson.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class PersonService {


    @Autowired
    private final JdbcTemplate jdbcTemplate;

    public PersonService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Object> getAllPersons() {
        return jdbcTemplate.query("SELECT FirstName FROM Users", (rs, rowNum) -> rs.getString("FirstName"));
    }
}
