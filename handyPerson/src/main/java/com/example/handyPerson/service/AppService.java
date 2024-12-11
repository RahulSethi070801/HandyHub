package com.example.handyPerson.service;

import com.example.handyPerson.Mapper.AppMapper;
import com.example.handyPerson.POJO.HandyPerson;
import com.example.handyPerson.POJO.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppService {

    @Autowired
    AppMapper appMapper;

    public AppService(AppMapper appMapper) {
        this.appMapper = appMapper;
    }

    public List<HandyPerson> getAllHandyPersons() {
        return appMapper.getAllHandyPersons();
    }

    public List<HandyPerson> getHandyPersonsByRating(Float rating) {
        return appMapper.getHandyPersonsByRating(rating);
    }


    public List<HandyPerson> filterHandyPerson(Integer minRating, Double maxPrice, String serviceName) {
        return appMapper.filterHandyPerson(minRating, maxPrice, serviceName);
    }


    public void deleteHandyPerson(Integer handyPersonId){ appMapper.deleteHandyPerson(handyPersonId); }

    public void createHandyPerson(HandyPerson handyPerson){ appMapper.createHandyPerson(handyPerson); }

    public void updateHandyPerson(Integer id, HandyPerson handyPerson){ appMapper.updateHandyPerson(id, handyPerson); }




    // KEYWORD SEARCH
    public List<HandyPerson> searchHandyPersons(String keyword) {
        return appMapper.searchHandyPersons(keyword);
//        return appMapper.searchHandyPersons("John");
    }

    public List<Services> getAllServices() {
        return appMapper.getAllServices();
    }



}
