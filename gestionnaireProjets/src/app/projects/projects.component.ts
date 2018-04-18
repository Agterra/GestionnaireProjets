import { Component, OnInit } from '@angular/core';
import {Project} from '../../project';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(private projectsService: ProjectService) {
    this.projects = [];
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projects = this.projectsService.getProjects();
  }
}
