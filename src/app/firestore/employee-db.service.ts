import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { Employee } from '../model/employee';
import { addDoc, collection, DocumentReference } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDbService {
  private firestore: Firestore = inject(Firestore);

  createEmployee(employee: Employee): Promise<DocumentReference> {
    const employees = collection(this.firestore, 'employees');
    delete employee.id;
    return addDoc(employees, { ...employee });
  }

  getEmployees(): Observable<Employee[]> {
    const employees = collection(this.firestore, 'employees');
    return collectionData(employees, { idField: 'id' }) as Observable<
      Employee[]
    >;
  }

  constructor() {}
}
