package com.loginform.controller;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.loginform.vo.employeeResponse;
import com.loginform.vo.user;


@RestController
@CrossOrigin
public class LoginController {
	
	@Value("${name}")
    private String username;
    
    @Value("${password}")
    private String password;
    
    
    @PostMapping(value = "/validate", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean validateCredentials(@RequestBody user User)
    {
    	
    	
    	if(User.getName().equals(username) && User.getPassword().equals(password))
    	{	
    		return true;
    	}
    		return false;
    }
    
    @GetMapping("/show")
    public List<employeeResponse> displayData()
    {
    	
    	List<employeeResponse> emp=new ArrayList<employeeResponse>();
    	employeeResponse employee=new employeeResponse();
    	employee.setKey("1");
    	employee.setEmpNumber("1");
    	employee.setEmpName("AAA");
    	employee.setRole("System Engineer");
    	emp.add(employee);
    	
    	employeeResponse employee1=new employeeResponse();
    	employee1.setKey("2");
    	employee1.setEmpNumber("2");
    	employee1.setEmpName("BBB");
    	employee1.setRole("Manager");
    	emp.add(employee1);
    	
    	employeeResponse employee2=new employeeResponse();
    	employee2.setKey("3");
    	employee2.setEmpNumber("3");
    	employee2.setEmpName("CCC");
    	employee2.setRole("Technical Architect");
    	emp.add(employee2);
    	
    	
    	
    	return emp;
    }
}
