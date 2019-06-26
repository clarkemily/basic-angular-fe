import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employees$: Observable<Employee[]>;
  
  constructor(private employeeService: EmployeeService) { }
  
    ngOnInit() {
      this.refreshEmployees();
    }
  
    addEmployee(form) {
      const employee:Employee = new Employee(form.value.firstName, form.value.lastName, form.value.email);
      this.employeeService.addEmployee(employee)
      .subscribe(
        employee => console.log('Next value: ', employee),
        err => console.error('Error: ', err),
        () => {
          console.log('Got a complete notification')
          this.refreshEmployees();
        }
      );
      form.reset();
    }
  
    private refreshEmployees(): void {
      this.employees$ = this.employeeService.getEmployees();
    }
}