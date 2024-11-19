package com.example.handyPerson.controller;

import com.example.handyPerson.POJO.HandyPerson;
import com.example.handyPerson.service.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class AppController {
    @Autowired
    private final AppService appService;

    @Autowired
    public AppController(AppService personService) {
        this.appService = personService;
    }

    @GetMapping("/getAllHandyPersons")
    public List<HandyPerson> getAllHandyPersons() {
        return appService.getAllHandyPersons();
    }

    @GetMapping("/getAllHandyPersons/{rating}")
    public List<HandyPerson> getHandyPersonsByRating(@PathVariable Float rating){
        return appService.getHandyPersonsByRating(rating);
    }
}
