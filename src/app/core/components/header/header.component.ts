import { Component, OnInit, inject } from '@angular/core';
import { DeviceService, UserService } from '../../services';
import { Device } from '../../models/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  deviceService: DeviceService = inject(DeviceService);
  userService: UserService = inject(UserService);
  router: Router = inject(Router);
  linkList: Array<string> = [];
  device: Device;
  open: boolean = false;

  constructor() {
    this.device = this.deviceService.getDevice();
  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(() => {
      this.setLinkList();
    });
  }

  setLinkList(): void {
    this.linkList = [
      ...(this.userService.currentUser.value.name !== ''
        ? ['home', 'profile', 'current', 'log out']
        : ['register', 'log in']),
    ];
  }

  toggle(): void {
    this.open = !this.open;
  }

  handle(link: string): void {
    if (link === 'log out') {
      this.userService.setCurrentUser('');
      this.setLinkList();
    }

    this.open = false;
    this.router.navigateByUrl(link);
  }
}
