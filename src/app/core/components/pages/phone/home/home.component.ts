import { Component, inject } from '@angular/core';
import { Device } from 'src/app/core/models/types';
import { DeviceService } from 'src/app/core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  deviceService: DeviceService = inject(DeviceService);
  device: Device;
  showCalendar: boolean = false;

  constructor() {
    this.device = this.deviceService.getDevice();
  }

  toggleCalendar(): void {
    this.showCalendar = !this.showCalendar;
  }
}
