import { Injectable, signal, computed } from '@angular/core';
import { HardwareDevice } from '../models/hardware-device.model';
import { HARDWARE_DEVICES } from '../data/mock-data';

@Injectable({ providedIn: 'root' })
export class HardwareService {
  private _devices = signal<HardwareDevice[]>(HARDWARE_DEVICES);
  private _restartingDeviceId = signal<string | null>(null);

  devices = this._devices.asReadonly();
  restartingDeviceId = this._restartingDeviceId.asReadonly();

  getDevicesByLane(lane: number): HardwareDevice[] {
    return this._devices().filter(d => d.lane === lane);
  }

  lane1Devices = computed(() => this._devices().filter(d => d.lane === 1));
  lane2Devices = computed(() => this._devices().filter(d => d.lane === 2));

  restartDevice(deviceId: string): void {
    this._restartingDeviceId.set(deviceId);
    this._devices.update(devices =>
      devices.map(d => d.id === deviceId ? { ...d, status: 'inactive' as const } : d)
    );
    setTimeout(() => {
      this._devices.update(devices =>
        devices.map(d => d.id === deviceId ? { ...d, status: 'active' as const } : d)
      );
      this._restartingDeviceId.set(null);
    }, 2000);
  }
}
