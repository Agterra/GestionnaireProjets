import { Injectable } from '@angular/core';
import {EMPLOYES} from '../mock-employes';
import {Employe} from '../employe';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmployesService {

  constructor() { }

  getEmployes(): Observable<Employe[]> {
    return of(EMPLOYES);
  }

  getEmploye(id: number): Observable<Employe> {
    return of(EMPLOYES.find( employe => employe.id === id));
  }
}
