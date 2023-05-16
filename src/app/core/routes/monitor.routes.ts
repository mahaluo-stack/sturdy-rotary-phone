import { Routes } from "@angular/router";
import * as ResponsivePages from '../components/pages/responsive';
import { responsiveRoutes } from "./responsive.routes";

const routes: Routes = [
]

export const monitorRoutes = routes.concat(responsiveRoutes);