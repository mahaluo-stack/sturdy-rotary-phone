import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceService, RoutingService } from './core/services';

const getRoutes = (): Routes => {
  const routingService: RoutingService = new RoutingService(new DeviceService());
  return routingService.getRoutes();
}

@NgModule({
  imports: [RouterModule.forRoot(getRoutes())],
  exports: [RouterModule]
})
export class AppRoutingModule { }
