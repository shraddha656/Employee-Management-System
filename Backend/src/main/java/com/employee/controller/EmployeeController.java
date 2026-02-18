package com.employee.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee.entity.Employee;
import com.employee.exception.ResourceNotFoundException;
import com.employee.repository.EmployeeRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
	@Autowired
	public EmployeeRepository repo;
	@GetMapping("/employees")
	public List<Employee> getAllEmployee(){
		return repo.findAll();
	}
	@PostMapping("/employees")
	public Employee AddEmployee(@RequestBody Employee emp) {
		return repo.save(emp);
	}
	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
		Employee employee=repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not Exist with id...."+id));
		return ResponseEntity.ok(employee);
	}
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employeeDetails){
		Employee employee=repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not Exist with id...."+id));
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setSalary(employeeDetails.getSalary());
		repo.save(employee);
		return ResponseEntity.ok(employee);
	}
	@DeleteMapping("employees/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable int id) {
		Employee employee=repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not Exist with id...."+id));
		repo.delete(employee);
		Map<String,Boolean> response=new HashMap<String,Boolean>();
		response.put("delete", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
