import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-error-overlay',
  templateUrl: './error-overlay.component.html',
  styleUrls: ['./error-overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorOverlayComponent {
  constructor(@Inject(MD_DIALOG_DATA) public data: string) {
  }
}
