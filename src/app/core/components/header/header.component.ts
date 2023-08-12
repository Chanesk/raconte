import { Component } from '@angular/core';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  icon = faBars;
  faXmark= faXmark;
  isShowNav=true;

  toggleDisplayNav(){
    this.isShowNav=!this.isShowNav;
  }
}
