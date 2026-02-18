import { Component } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee-service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
})
export class EmployeeList implements OnInit   {
  employees:Employee[]=[];

  constructor(private employeeService:EmployeeService,private router:Router){}

  ngOnInit(): void {
  console.log("ngOnInit called");
  this.getEmployees();
}


  private getEmployees():void{
    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees=data;
    });
  }
  updateEmployee(id:number):void{
    this.router.navigate(['update-employee',id]);
  }
  deleteEmployee(id:number):void{
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    });
  }
  viewEmployee(id:number){
    this.router.navigate(['employee-details',id]);
  }
  
}
