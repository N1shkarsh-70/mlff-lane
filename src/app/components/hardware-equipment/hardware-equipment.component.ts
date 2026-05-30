import { Component, inject } from '@angular/core';
import { HardwareService } from '../../services/hardware.service';
import { EquipmentCardComponent } from './equipment-card/equipment-card.component';

@Component({
  selector: 'app-hardware-equipment',
  standalone: true,
  imports: [EquipmentCardComponent],
  templateUrl: './hardware-equipment.component.html',
  styleUrl: './hardware-equipment.component.css',
})
export class HardwareEquipmentComponent {
  hardwareService = inject(HardwareService);
}
