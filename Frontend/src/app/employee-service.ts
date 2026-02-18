import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/employees';
  constructor(private httpClient:HttpClient){}
  
    getEmployeeList():Observable<Employee[]>{
      return this.httpClient.get<Employee[]>(`${this.apiUrl}`);
    }

    addEmployee(employee:Employee):Observable<Object>{
      return this.httpClient.post(this.apiUrl, employee);
    }
    getEmployeeById(id:number):Observable<Employee>{
      return this.httpClient.get<Employee>(`${this.apiUrl}/${id}`);
    }
    updateEmployee(id:number, employee:Employee):Observable<Employee>{
      return this.httpClient.put<Employee>(`${this.apiUrl}/${id}`, employee);
    }
    deleteEmployee(id:number):Observable<Object>{
      return this.httpClient.delete<Employee>(`${this.apiUrl}/${id}`);
    }
    
}
