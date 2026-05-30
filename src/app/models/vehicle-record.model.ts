export interface VehicleRecord {
  timestamp: string;
  lane: number;
  direction: 'Inbound' | 'Outbound';
  plateNumber: string;
  vehicleType: 'Car' | 'SUV' | 'Truck' | 'Bus' | 'Motorcycle';
  vehicleClass: string;
  speed: number;
  length: number;
  axles: number;
  confidence: number;
  paymentStatus: 'Paid' | 'Unpaid' | 'Pending';
  snapshotUrl: string;
}
