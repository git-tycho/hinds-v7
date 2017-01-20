import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApplyComponent } from './apply/apply.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { PathwaysComponent } from './pathways/pathways.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'about', component: AboutComponent},
  {path: 'apply/:id', component: ApplyComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'pathways', component: PathwaysComponent},
  {path: 'start', component: StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [
  AboutComponent,
  ApplyComponent,
  ContactComponent,
  HomeComponent,
  JobsComponent,
  PathwaysComponent,
  StartComponent
]
