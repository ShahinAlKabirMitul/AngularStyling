import { UsersComponent } from '../users/users.component';
import { ProjectsComponent } from '../projects/projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'users', component: UsersComponent }
];



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
