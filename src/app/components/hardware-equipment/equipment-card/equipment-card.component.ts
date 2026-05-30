import { Component, input, inject, signal } from '@angular/core';
import { HardwareDevice } from '../../../models/hardware-device.model';
import { HardwareService } from '../../../services/hardware.service';

@Component({
  selector: 'app-equipment-card',
  standalone: true,
  templateUrl: './equipment-card.component.html',
  styleUrl: './equipment-card.component.css',
})
export class EquipmentCardComponent {
  device = input.required<HardwareDevice>();
  hardwareService = inject(HardwareService);
  isRestarting = signal(false);

  getDeviceIcon(): string {
    switch (this.device().type) {
      case 'rfid': return 'rfid';
      case 'anpr-front': return 'camera-front';
      case 'anpr-back': return 'camera-back';
      case 'radar-4d': return 'radar';
      case 'lidar-3d': return 'lidar';
      default: return 'device';
    }
  }

  onRestart(): void {
    this.isRestarting.set(true);
    this.hardwareService.restartDevice(this.device().id);
    setTimeout(() => this.isRestarting.set(false), 2000);
  }
}
