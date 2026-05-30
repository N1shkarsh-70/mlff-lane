import { Injectable, signal, computed } from '@angular/core';
import { Lane, ServiceStatus } from '../models/lane.model';
import { LANES, SERVICE_STATUSES } from '../data/mock-data';

@Injectable({ providedIn: 'root' })
export class LaneService {
  private _lanes = signal<Lane[]>(LANES);
  private _selectedLaneId = signal<number>(1);
  private _serviceStatuses = signal<ServiceStatus[]>(SERVICE_STATUSES);

  lanes = this._lanes.asReadonly();
  selectedLaneId = this._selectedLaneId.asReadonly();
  serviceStatuses = this._serviceStatuses.asReadonly();

  selectedLane = computed(() => {
    return this._lanes().find(l => l.id === this._selectedLaneId()) ?? this._lanes()[0];
  });

  selectLane(laneId: number): void {
    this._selectedLaneId.set(laneId);
  }

  restartService(serviceName: string): void {
    // Simulate restart: briefly set to inactive then back to active
    this._serviceStatuses.update(statuses =>
      statuses.map(s => s.name === serviceName ? { ...s, status: 'inactive' as const } : s)
    );
    setTimeout(() => {
      this._serviceStatuses.update(statuses =>
        statuses.map(s => s.name === serviceName ? { ...s, status: 'active' as const } : s)
      );
    }, 1500);
  }
}
