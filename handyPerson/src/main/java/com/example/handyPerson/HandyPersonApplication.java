package com.example.handyPerson;

import com.example.handyPerson.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class HandyPersonApplication {


	@Autowired
	PersonService personService;


	public HandyPersonApplication(PersonService personService) {
		this.personService = personService;
	}


	public static void main(String[] args) {

		SpringApplication.run(HandyPersonApplication.class, args);
		ApplicationContext context = SpringApplication.run(HandyPersonApplication.class, args);
		PersonService personService1 = context.getBean(PersonService.class);
		personService1.getAllPersons();
	}

	public void getAllPersons() {
		personService.getAllPersons();
	}
}
