import { Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { AddEmployee } from './add-employee/add-employee';
import { Component } from '@angular/core';
import { UpdateEmployee } from './update-employee/update-employee';
import { EmployeeDetails } from './employee-details/employee-details';

export const routes: Routes = [
    // Define your routes here
    {path:'employees',component:EmployeeList},
    {path:'add-employee',component:AddEmployee},
    {path:'',redirectTo:'employees',pathMatch:'full'},
    {path:'update-employee/:id',component:UpdateEmployee},
    {path:'employee-details/:id',component:EmployeeDetails}
];
     