package com.example.handyPerson.Mapper;

import com.example.handyPerson.POJO.HandyPerson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
public class AppMapper {

    @Autowired
    private final JdbcTemplate jdbcTemplate;

    public AppMapper(JdbcTemplate jdbcTemplate) {
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


    @Transactional
    public void deleteHandyPerson(Integer handyPersonId){
        String sql = "DELETE FROM HandyPerson WHERE HandyPersonId = '" + handyPersonId + "'";
        jdbcTemplate.update(sql);
    }

    @Transactional
    public void createHandyPerson(HandyPerson handyPerson){
        String sql = String.format("INSERT INTO HandyPerson (FirstName, LastName, ContactNumber, EmailAddress, Address, City, State, Country, PostalCode) VALUES ('%s', '%s', '%s', '%s', '%s','%s', '%s', '%s', '%s')", handyPerson.getFirstName(), handyPerson.getLastName(), handyPerson.getContactNumber(), handyPerson.getEmailAddress(), handyPerson.getAddress(), handyPerson.getCity(), handyPerson.getState(), handyPerson.getCountry(), handyPerson.getPostalCode());
        jdbcTemplate.update(sql);
    }

    @Transactional
    public void updateHandyPerson(int HandyPersonId, HandyPerson handyPerson){
        String sql = String.format("UPDATE HandyPerson SET FirstName = '%s', LastName = '%s', ContactNumber = '%s', EmailAddress = '%s', Address = '%s', City = '%s', State = '%s', Country = '%s', PostalCode = '%s' WHERE HandyPersonId = %d", handyPerson.getFirstName(), handyPerson.getLastName(), handyPerson.getContactNumber(), handyPerson.getEmailAddress(), handyPerson.getAddress(), handyPerson.getCity(), handyPerson.getState(), handyPerson.getCountry(), handyPerson.getPostalCode(), handyPerson.getHandyPersonId());
        jdbcTemplate.update(sql);
    }


}
