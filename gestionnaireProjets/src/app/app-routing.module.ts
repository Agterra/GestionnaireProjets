import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DetailEmployeComponent} from './detail-employe/detail-employe.component';
import {DetailProjetComponent} from './detail-projet/detail-projet.component';
import {EmployesComponent} from './employes/employes.component';
import {ProjectsComponent} from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'employes', component: EmployesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employe/:id', component: DetailEmployeComponent },
  { path: 'project/:id', component: DetailProjetComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
