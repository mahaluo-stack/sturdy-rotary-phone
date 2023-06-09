import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedUiModule } from 'src/app/shared/ui/shared.ui.module';

@NgModule({
  declarations: [HomeComponent, ProfileComponent],
  imports: [CommonModule, SharedUiModule],
})
export class PhoneModule {}
