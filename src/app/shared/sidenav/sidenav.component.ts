import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() open = false;

  @Output() openChange = new EventEmitter();
}
