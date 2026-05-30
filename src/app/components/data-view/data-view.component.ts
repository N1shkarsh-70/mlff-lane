import { Component, inject } from '@angular/core';
import { VehicleDataService } from '../../services/vehicle-data.service';

@Component({
  selector: 'app-data-view',
  standalone: true,
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.css',
})
export class DataViewComponent {
  vehicleDataService = inject(VehicleDataService);

  getVehicleIcon(type: string): string {
    switch (type) {
      case 'Car': return '🚗';
      case 'SUV': return '🚙';
      case 'Truck': return '🚛';
      case 'Bus': return '🚌';
      case 'Motorcycle': return '🏍️';
      default: return '🚗';
    }
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.vehicleDataService.setSearchQuery(input.value);
  }

  onTabSelect(tab: string): void {
    this.vehicleDataService.setActiveTab(tab);
  }

  onExport(): void {
    this.vehicleDataService.exportData();
  }
}
