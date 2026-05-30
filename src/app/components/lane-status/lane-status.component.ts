import { Component, signal } from '@angular/core';
import { LANE_STATUS_DEVICES } from '../../data/mock-data';
import { LaneStatusDevice } from '../../models/lane.model';

@Component({
  selector: 'app-lane-status',
  standalone: true,
  templateUrl: './lane-status.component.html',
  styleUrl: './lane-status.component.css',
})
export class LaneStatusComponent {
  devices = signal<LaneStatusDevice[]>(LANE_STATUS_DEVICES);

  getDeviceIcon(type: string): string {
    return type;
  }
}
