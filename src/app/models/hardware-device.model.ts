export interface DeviceMetric {
  label: string;
  value: string;
}

export interface HardwareDevice {
  id: string;
  name: string;
  type: 'rfid' | 'anpr-front' | 'anpr-back' | 'radar-4d' | 'lidar-3d';
  lane: number;
  status: 'active' | 'inactive' | 'error';
  metrics: DeviceMetric[];
  lastSync?: string;
}
