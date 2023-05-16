import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceService, RoutingService, UserService } from './core/services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResponsiveModule } from './core/components/pages/responsive/responsive.module';
import { PhoneModule } from './core/components/pages/phone/phone.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ResponsiveModule,
    PhoneModule
  ],
  providers: [
    DeviceService,
    UserService,
    RoutingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
