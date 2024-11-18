package com.example.handyPerson.service;

import com.example.handyPerson.Mapper.AppMapper;
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

    public List<Object> getAllPersons() {
        return appMapper.getAllPersons();
    }
}
