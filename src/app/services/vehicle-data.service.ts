import { Injectable, signal, computed } from '@angular/core';
import { VehicleRecord } from '../models/vehicle-record.model';
import { VEHICLE_RECORDS, DATA_VIEW_TABS } from '../data/mock-data';

@Injectable({ providedIn: 'root' })
export class VehicleDataService {
  private _records = signal<VehicleRecord[]>(VEHICLE_RECORDS);
  private _activeTab = signal<string>(DATA_VIEW_TABS[0]);
  private _searchQuery = signal<string>('');

  records = this._records.asReadonly();
  activeTab = this._activeTab.asReadonly();
  searchQuery = this._searchQuery.asReadonly();
  tabs = DATA_VIEW_TABS;

  filteredRecords = computed(() => {
    const query = this._searchQuery().toLowerCase().trim();
    if (!query) return this._records();
    return this._records().filter(r =>
      r.plateNumber.toLowerCase().includes(query) ||
      r.vehicleType.toLowerCase().includes(query) ||
      r.direction.toLowerCase().includes(query) ||
      r.vehicleClass.toLowerCase().includes(query) ||
      r.paymentStatus.toLowerCase().includes(query)
    );
  });

  setActiveTab(tab: string): void {
    this._activeTab.set(tab);
  }

  setSearchQuery(query: string): void {
    this._searchQuery.set(query);
  }

  exportData(): void {
    const records = this.filteredRecords();
    const headers = ['Timestamp', 'Lane', 'Direction', 'Plate Number', 'Vehicle Type', 'Vehicle Class', 'Speed (km/h)', 'Length (m)', 'Axles', 'Confidence', 'Payment Status'];
    const csvRows = [
      headers.join(','),
      ...records.map(r =>
        [r.timestamp, r.lane, r.direction, r.plateNumber, r.vehicleType, r.vehicleClass, r.speed, r.length, r.axles, `${r.confidence}%`, r.paymentStatus].join(',')
      )
    ];
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `vehicle_data_${this._activeTab()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }
}
