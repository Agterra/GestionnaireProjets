import { Component, OnInit } from '@angular/core';
import {Project} from '../../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  projects: Project[];

  constructor(private projectsService: ProjectService) {
    this.projects = [];
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectsService.getProjects().subscribe( projects => this.projects = projects );
  }
}
