package com.example.handyPerson.controller;

import com.example.handyPerson.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;

@RestController
public class PersonController {
    @Autowired
    private final PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    public List<Object> getAllPersons() {
        return personService.getAllPersons();
    }
}
