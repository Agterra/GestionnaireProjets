import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DetailEmployeComponent } from './detail-employe/detail-employe.component';
import { DetailProjetComponent } from './detail-projet/detail-projet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProjectService } from './project.service';
import { ProjectsComponent } from './projects/projects.component';
import { EmployesService } from './employes.service';
import { EmployesComponent } from './employes/employes.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailEmployeComponent,
    DetailProjetComponent,
    DashboardComponent,
    ProjectsComponent,
    EmployesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProjectService,
    EmployesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
