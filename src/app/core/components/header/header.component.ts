import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  hamburgerPath: string = '/assets/icons/hamburger.svg';
  moosefacePath: string = '/assets/icons/mooseface.svg';
  rightArmPath: string = '/assets/icons/rightArm.svg';
  leftArmPath: string = '/assets/icons/leftArm.svg';
}
