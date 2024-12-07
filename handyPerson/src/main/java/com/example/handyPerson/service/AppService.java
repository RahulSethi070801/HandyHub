package com.example.handyPerson.service;

import com.example.handyPerson.Mapper.AppMapper;
import com.example.handyPerson.POJO.HandyPerson;
import org.springframework.beans.factory.annotation.Autowired;
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

    public void deleteHandyPerson(Integer handyPersonId){ appMapper.deleteHandyPerson(handyPersonId); }

    public void createHandyPerson(HandyPerson handyPerson){ appMapper.createHandyPerson(handyPerson); }

    public void updateHandyPerson(Integer id, HandyPerson handyPerson){ appMapper.updateHandyPerson(id, handyPerson); }

}
