import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Employee } from '../models/employee';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(public http: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        const endpoint = environment.apiUrl + 'employees/';
        console.log('Get Employees');
        console.log(endpoint);
        console.log(this.http.get<Employee[]>(endpoint));
        return this.http.get<Employee[]>(endpoint);
    }

    addEmployee(employee: Employee): Observable<Employee> {
    const endpoint = environment.apiUrl + 'employees/';
    console.log(endpoint);
    return this.http.post<Employee>(endpoint, employee);
    }
}