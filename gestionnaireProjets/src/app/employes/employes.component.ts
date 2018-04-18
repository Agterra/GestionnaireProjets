import { Component, OnInit } from '@angular/core';
import {Employe} from '../../employe';
import {EmployesService} from '../employes.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  employes: Employe[];

  constructor(private employesService: EmployesService) {
    this.employes = [];
  }

  ngOnInit() {
    this.getEmployes();
  }

  getEmployes(): void {
    this.employesService.getEmployes().subscribe( employes => this.employes = employes );
  }

}
