package com.example.handyPerson.controller;

import com.example.handyPerson.service.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class AppController {
    @Autowired
    private final AppService personService;

    @Autowired
    public AppController(AppService personService) {
        this.personService = personService;
    }

    @RequestMapping("/")
    public List<Object> getAllPersons() {
        return personService.getAllPersons();
    }
}
