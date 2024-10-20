import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { EmployeeDbService } from '../firestore/employee-db.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employeeService: EmployeeDbService = inject(EmployeeDbService);

  get $(): Observable<Employee[]> {
    return this.employeeService.getEmployees();
  }

  addEmployee(employee: Employee) {
    this.employeeService
      .createEmployee(employee)
      .catch((_) => console.log('Failed'));
    return true;
  }
}
