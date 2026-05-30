import { Component, inject, signal } from '@angular/core';
import { ClockService } from '../../services/clock.service';
import { LaneService } from '../../services/lane.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  clockService = inject(ClockService);
  laneService = inject(LaneService);

  laneDropdownOpen = signal(false);
  userDropdownOpen = signal(false);
  restartingService = signal<string | null>(null);

  toggleLaneDropdown(): void {
    this.laneDropdownOpen.update(v => !v);
    this.userDropdownOpen.set(false);
  }

  selectLane(laneId: number): void {
    this.laneService.selectLane(laneId);
    this.laneDropdownOpen.set(false);
  }

  toggleUserDropdown(): void {
    this.userDropdownOpen.update(v => !v);
    this.laneDropdownOpen.set(false);
  }

  restartService(serviceName: string): void {
    this.restartingService.set(serviceName);
    this.laneService.restartService(serviceName);
    setTimeout(() => this.restartingService.set(null), 1500);
  }
}
