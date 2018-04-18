import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../project';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../project.service';
import {Location} from '@angular/common';
import {EmployesService} from '../employes.service';
import {Employe} from '../../employe';

@Component({
  selector: 'app-detail-projet',
  templateUrl: './detail-projet.component.html',
  styleUrls: ['./detail-projet.component.css']
})
export class DetailProjetComponent implements OnInit {

  @Input() project: Project;

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private employeService: EmployesService,
              private location: Location) { }

  ngOnInit() {
    this.getProjet();
  }

  getProjet(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProjet(id).subscribe( project => this.project = project );
  }

  goBack(): void {
    this.location.back();
  }
}
