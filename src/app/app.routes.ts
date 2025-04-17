import { Routes } from '@angular/router';
import { HomeComponent } from './primary/components/home.component';
import { SupportComponent } from './primary/components/support.component';
import { TermsServiceComponent } from './primary/components/terms-service.component';
import { PrivacyPolicyComponent } from './primary/components/privacy-policy.component';
import { ProjectDetailsComponent } from './primary/components/project-details.component';

export const routes: Routes = [
  {
    path: '',
    title: 'PrasunChakra',
    component: HomeComponent,
  },
  {
    path: 'privacy-policy',
    title: 'PrasunChakra',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms-of-service',
    title: 'PrasunChakra',
    component: TermsServiceComponent,
  },
  {
    path: 'support',
    title: 'PrasunChakra',
    component: SupportComponent,
  },
  {
    path: 'project-details',
    title: 'Project Details',
    component: ProjectDetailsComponent,
  },
  {
    path: '**',
    title: 'PrasunChakra',
    component: HomeComponent,
  },
];
