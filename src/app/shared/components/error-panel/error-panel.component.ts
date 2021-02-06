import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-panel',
  templateUrl: './error-panel.component.html',
  styleUrls: ['./error-panel.component.scss'],
})
export class ErrorPanelComponent {
  @Input() code = '';
}
