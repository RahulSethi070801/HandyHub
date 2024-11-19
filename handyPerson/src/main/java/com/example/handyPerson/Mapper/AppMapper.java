package com.example.handyPerson.Mapper;

import com.example.handyPerson.POJO.HandyPerson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AppMapper {

    @Autowired
    private final JdbcTemplate jdbcTemplate;

    private AppMapper(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<HandyPerson> getAllHandyPersons(){
        return jdbcTemplate.query("SELECT H.HandyPersonId, H.FirstName, H.LastName, H.ContactNumber, H.City, H.State," +
                "X.AverageRating\n" +
                "from HandyPerson H inner join \n" +
                "(SELECT HandyPersonId, AVG(Rating) as AverageRating from Reviews GROUP BY HandyPersonId) X \n" +
                "on H.HandyPersonId = X.HandyPersonId", new BeanPropertyRowMapper<>(HandyPerson.class));
        }

    public List<HandyPerson> getHandyPersonsByRating(Float rating){
        return jdbcTemplate.query("SELECT H.HandyPersonId, H.FirstName, H.Lastname, H.ContactNumber, H.City, H.State,  X.AverageRating from HandyPerson H \n" +
                "inner join (SELECT HandyPersonId, AVG(Rating) as AverageRating \n" +
                "from Reviews GROUP BY HandyPersonId HAVING AverageRating >= ?) X \n" +
                "on H.HandyPersonId = X.HandyPersonId",
                new Object[]{rating}, new BeanPropertyRowMapper<>(HandyPerson.class)
        );
    }



}
