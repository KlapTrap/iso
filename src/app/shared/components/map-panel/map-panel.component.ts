import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map-panel',
  templateUrl: './map-panel.component.html',
  styleUrls: ['./map-panel.component.scss'],
})
export class MapPanelComponent {
  @Input() center = { lat: 0, lng: 0 };
}
