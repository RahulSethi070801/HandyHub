package com.example.handyPerson.controller;

import com.example.handyPerson.POJO.HandyPerson;
import com.example.handyPerson.service.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/filterHandyPersons")
    public List<HandyPerson> filterHandyPerson(
            @RequestParam(required = false) Integer minRating,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) String serviceName) {
        return appService.filterHandyPerson(minRating, maxPrice, serviceName);
    }


    @GetMapping("/deleteHandyPerson/{handyPersonId}")
    public void deleteHandyPerson(@PathVariable Integer handyPersonId){
        appService.deleteHandyPerson(handyPersonId);
    }

    @PostMapping("/createHandyPerson")
    public ResponseEntity<Void> createHandyPerson(@RequestBody HandyPerson handyPerson) {
        appService.createHandyPerson(handyPerson);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/updateHandyPerson/{id}")
    public ResponseEntity<Void> updateHandyPerson(@PathVariable Integer id, @RequestBody HandyPerson handyPerson){
        appService.updateHandyPerson(id, handyPerson);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}


