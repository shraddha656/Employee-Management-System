import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './add-employee.html',
  styleUrls: ['./add-employee.css'],
})
export class AddEmployee {
  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService,private route:Router ){}
  onSubmit():void{
    console.log('Form submitted');
    this.insertEmployee();
    console.log(this.employee);
  }
  insertEmployee():void{
    this.employeeService.addEmployee(this.employee).subscribe(data=>{
      console.log("Employee Added",data);
      this.goToEmployeeList();

    });
  }

  goToEmployeeList():void{
    this.route.navigate(['/employees']);
  }
}
