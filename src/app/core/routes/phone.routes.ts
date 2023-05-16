import { Routes } from "@angular/router";

import * as PhonePages from '../components/pages/phone';
import { responsiveRoutes } from "./responsive.routes";
import { AuthGuard } from "../guards";

const routes: Routes = [
  {
    title: 'home',
    path: 'home',
    component: PhonePages.HomeComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    title: 'profile',
    path: 'profile',
    component: PhonePages.ProfileComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
  },
]

export const phoneRoutes = routes.concat(responsiveRoutes);