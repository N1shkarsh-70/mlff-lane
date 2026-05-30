export interface Lane {
  id: number;
  name: string;
  status: 'active' | 'inactive';
}

export interface ServiceStatus {
  name: string;
  status: 'active' | 'inactive' | 'error';
}

export interface LaneStatusDevice {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'inactive' | 'error';
}
