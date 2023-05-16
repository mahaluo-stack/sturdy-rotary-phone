import { Routes } from "@angular/router";

import * as ResponsivePages from '../components/pages/responsive';
import { AuthGuard } from "../guards";

export const responsiveRoutes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'log in'
  },
  {
    title: 'log in',
    path: 'log in',
    component: ResponsivePages.LoginComponent
  },
  {
    path: 'register',
    component: ResponsivePages.RegisterComponent
  },
  {
    path: 'about',
    component: ResponsivePages.AboutComponent
  },
  {
    path: 'contact',
    component: ResponsivePages.ContactComponent
  },
  {
    path: 'log out',
    component: ResponsivePages.LogoutComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'recover',
    component: ResponsivePages.RecoverComponent
  },
  {
    path: '404',
    component: ResponsivePages.NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  },
]