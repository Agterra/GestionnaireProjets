import { Injectable } from '@angular/core';
import {Project} from '../project';
import {PROJETS} from '../mock-projects';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {Employe} from '../employe';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(PROJETS);
  }

  getProjet(id: number): Observable<Project> {
    return of(PROJETS.find( project => project.id === id));
  }

}
