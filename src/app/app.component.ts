import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HardwareEquipmentComponent } from './components/hardware-equipment/hardware-equipment.component';
import { LiveViewComponent } from './components/live-view/live-view.component';
import { LaneStatusComponent } from './components/lane-status/lane-status.component';
import { DataViewComponent } from './components/data-view/data-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HardwareEquipmentComponent,
    LiveViewComponent,
    LaneStatusComponent,
    DataViewComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Smart Lane Monitoring Dashboard';
}
