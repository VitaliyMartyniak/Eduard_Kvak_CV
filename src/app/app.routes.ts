import { Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {ContactsComponent} from "./views/contacts/contacts.component";
import {SkillsAndServicesComponent} from "./views/skills-and-services/skills-and-services.component";
import {ProjectsComponent} from "./views/projects/projects.component";
import {AboutMeComponent} from "./views/about-me/about-me.component";
import {CarIqPayProjectComponent} from "./views/projects/views/car-iq-pay-project/car-iq-pay-project.component";
import {ClarityProjectComponent} from "./views/projects/views/clarity-project/clarity-project.component";
import {IntelasProjectComponent} from "./views/projects/views/intelas-project/intelas-project.component";
import {AlifBeeKidsProjectComponent} from "./views/projects/views/alif-bee-kids-project/alif-bee-kids-project.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'skills-and-services', component: SkillsAndServicesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/car-iq-pay', component: CarIqPayProjectComponent },
  { path: 'projects/clarity', component: ClarityProjectComponent },
  { path: 'projects/intelas', component: IntelasProjectComponent },
  { path: 'projects/alifBee-kids', component: AlifBeeKidsProjectComponent },
  { path: '**', redirectTo: '/' },
];
