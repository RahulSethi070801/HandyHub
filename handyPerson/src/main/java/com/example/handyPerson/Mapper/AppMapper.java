package com.example.handyPerson.Mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AppMapper {

    @Autowired
    private final JdbcTemplate jdbcTemplate;

    private AppMapper(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Object> getAllPersons(){
        return jdbcTemplate.query("SELECT FirstName FROM Users", (rs, rowNum) -> rs.getString("FirstName"));
        }


}
