import {Component, Input, OnInit} from '@angular/core';
import {Employe} from '../../employe';
import {ActivatedRoute} from '@angular/router';
import {EmployesService} from '../employes.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail-employe',
  templateUrl: './detail-employe.component.html',
  styleUrls: ['./detail-employe.component.css']
})
export class DetailEmployeComponent implements OnInit {

  @Input() employe: Employe;

  constructor(private route: ActivatedRoute,
              private employeService: EmployesService,
              private location: Location) { }

  ngOnInit() {
    this.getEmploye();
  }

  getEmploye(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeService.getEmploye(id).subscribe( employe => this.employe = employe );
  }

  goBack(): void {
    this.location.back();
  }
}
