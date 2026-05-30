import { HardwareDevice } from '../models/hardware-device.model';
import { LiveFeed } from '../models/live-feed.model';
import { VehicleRecord } from '../models/vehicle-record.model';
import { Lane, ServiceStatus, LaneStatusDevice } from '../models/lane.model';

export const LANES: Lane[] = [
  { id: 1, name: 'Lane 1', status: 'active' },
  { id: 2, name: 'Lane 2', status: 'active' },
];

export const SERVICE_STATUSES: ServiceStatus[] = [
  { name: 'API', status: 'active' },
  { name: 'Uploader', status: 'active' },
  { name: 'Server', status: 'active' },
];

export const HARDWARE_DEVICES: HardwareDevice[] = [
  // Lane 1
  {
    id: 'rfid-1', name: 'RFID Reader', type: 'rfid', lane: 1, status: 'active',
    metrics: [
      { label: 'Latency', value: '23 ms' },
      { label: 'Last Sync', value: '2 sec ago' },
    ],
  },
  {
    id: 'anpr-front-1', name: 'ANPR Front Camera', type: 'anpr-front', lane: 1, status: 'active',
    metrics: [
      { label: 'Resolution', value: '1920 x 1080' },
      { label: 'FPS', value: '30' },
    ],
  },
  {
    id: 'anpr-back-1', name: 'ANPR Back Camera', type: 'anpr-back', lane: 1, status: 'active',
    metrics: [
      { label: 'Resolution', value: '1920 x 1080' },
      { label: 'FPS', value: '30' },
    ],
  },
  {
    id: 'radar-4d-1', name: '4D Radar Sensor', type: 'radar-4d', lane: 1, status: 'active',
    metrics: [
      { label: 'Range', value: '1 - 250 m' },
      { label: 'Max Range', value: '250 m' },
      { label: 'Last Sync', value: '1 sec ago' },
    ],
  },
  {
    id: 'lidar-3d-1', name: '3D Lidar Sensor', type: 'lidar-3d', lane: 1, status: 'active',
    metrics: [
      { label: 'Range', value: '1 - 200 m' },
      { label: 'Last Sync', value: '1 sec ago' },
    ],
  },
  // Lane 2
  {
    id: 'rfid-2', name: 'RFID Reader', type: 'rfid', lane: 2, status: 'active',
    metrics: [
      { label: 'Latency', value: '23 ms' },
      { label: 'Last Sync', value: '2 sec ago' },
    ],
  },
  {
    id: 'anpr-front-2', name: 'ANPR Front Camera', type: 'anpr-front', lane: 2, status: 'active',
    metrics: [
      { label: 'Resolution', value: '1920 x 1080' },
      { label: 'FPS', value: '30' },
    ],
  },
  {
    id: 'anpr-back-2', name: 'ANPR Back Camera', type: 'anpr-back', lane: 2, status: 'active',
    metrics: [
      { label: 'Resolution', value: '1920 x 1080' },
      { label: 'FPS', value: '30' },
    ],
  },
  {
    id: 'radar-4d-2', name: '4D Radar Sensor', type: 'radar-4d', lane: 2, status: 'active',
    metrics: [
      { label: 'Range', value: '1 - 250 m' },
      { label: 'Max Range', value: '250 m' },
      { label: 'Last Sync', value: '1 sec ago' },
    ],
  },
  {
    id: 'lidar-3d-2', name: '3D Lidar Sensor', type: 'lidar-3d', lane: 2, status: 'active',
    metrics: [
      { label: 'Range', value: '1 - 200 m' },
      { label: 'Last Sync', value: '1 sec ago' },
    ],
  },
];

export const LIVE_FEEDS: LiveFeed[] = [
  // Lane 1
  { id: 'feed-anpr-front-1', name: 'ANPR Front', type: 'anpr-front', lane: 1, imageUrl: 'assets/feeds/anpr-front.png', isLive: true, resolution: '1920 x 1080', timestamp: '07:05:38 PM' },
  { id: 'feed-anpr-back-1', name: 'ANPR Back', type: 'anpr-back', lane: 1, imageUrl: 'assets/feeds/anpr-back.png', isLive: true, resolution: '1920 x 1080', timestamp: '07:05:38 PM' },
  { id: 'feed-surveillance-1', name: 'Surveillance Camera', type: 'surveillance', lane: 1, imageUrl: 'assets/feeds/surveillance.png', isLive: true, resolution: '1920 x 1080', timestamp: '07:05:38 PM' },
  { id: 'feed-radar-4d-1', name: '4D Radar View', type: 'radar-4d', lane: 1, imageUrl: 'assets/feeds/radar-4d.png', isLive: true, latency: '1 ms', timestamp: '07:05:38 PM' },
  { id: 'feed-lidar-3d-1', name: '3D Lidar View', type: 'lidar-3d', lane: 1, imageUrl: 'assets/feeds/lidar-3d.png', isLive: true, latency: '1 ms', timestamp: '07:05:38 PM' },
  // Lane 2
  { id: 'feed-anpr-front-2', name: 'ANPR Front', type: 'anpr-front', lane: 2, imageUrl: 'assets/feeds/anpr-front.png', isLive: true, resolution: '1920 x 1080', timestamp: '07:05:38 PM' },
  { id: 'feed-anpr-back-2', name: 'ANPR Back', type: 'anpr-back', lane: 2, imageUrl: 'assets/feeds/anpr-back.png', isLive: true, resolution: '1920 x 1080', timestamp: '07:05:38 PM' },
  { id: 'feed-surveillance-2', name: 'Surveillance Camera', type: 'surveillance', lane: 2, imageUrl: 'assets/feeds/surveillance.png', isLive: true, resolution: '1920 x 1080', timestamp: '07:05:38 PM' },
  { id: 'feed-radar-4d-2', name: '4D Radar View', type: 'radar-4d', lane: 2, imageUrl: 'assets/feeds/radar-4d.png', isLive: true, latency: '1 ms', timestamp: '07:05:38 PM' },
  { id: 'feed-lidar-3d-2', name: '3D Lidar View', type: 'lidar-3d', lane: 2, imageUrl: 'assets/feeds/lidar-3d.png', isLive: true, latency: '1 ms', timestamp: '07:05:38 PM' },
];

export const LANE_STATUS_DEVICES: LaneStatusDevice[] = [
  { id: 'ls-rfid-1', name: 'RFID 1', type: 'rfid', status: 'active' },
  { id: 'ls-rfid-2', name: 'RFID 2', type: 'rfid', status: 'active' },
  { id: 'ls-anpr-front-1', name: 'ANPR Front 1', type: 'anpr-front', status: 'active' },
  { id: 'ls-anpr-front-2', name: 'ANPR Front 2', type: 'anpr-front', status: 'active' },
  { id: 'ls-anpr-back-1', name: 'ANPR Back 1', type: 'anpr-back', status: 'active' },
  { id: 'ls-anpr-back-2', name: 'ANPR Back 2', type: 'anpr-back', status: 'active' },
  { id: 'ls-radar-4d-1', name: '4D Radar 1', type: 'radar-4d', status: 'active' },
  { id: 'ls-radar-4d-2', name: '4D Radar 2', type: 'radar-4d', status: 'active' },
  { id: 'ls-lidar-3d-1', name: '3D Lidar 1', type: 'lidar-3d', status: 'active' },
  { id: 'ls-lidar-3d-2', name: '3D Lidar 2', type: 'lidar-3d', status: 'active' },
];

export const DATA_VIEW_TABS: string[] = [
  'ANPR Front 1', 'ANPR Front 2', 'ANPR Back 1', 'ANPR Back 2',
  '4D Radar 1', '4D Radar 2', '3D Lidar 1', '3D Lidar 2',
];

export const VEHICLE_RECORDS: VehicleRecord[] = [
  {
    timestamp: '07/05/2025 07:05:38 PM', lane: 1, direction: 'Inbound',
    plateNumber: 'A170008', vehicleType: 'Car', vehicleClass: 'Class 1',
    speed: 73.5, length: 4.2, axles: 2, confidence: 98,
    paymentStatus: 'Paid', snapshotUrl: 'assets/feeds/anpr-front.png',
  },
  {
    timestamp: '07/05/2025 07:05:30 PM', lane: 1, direction: 'Inbound',
    plateNumber: 'A290008', vehicleType: 'SUV', vehicleClass: 'Class 1',
    speed: 76.0, length: 4.8, axles: 2, confidence: 97,
    paymentStatus: 'Paid', snapshotUrl: 'assets/feeds/anpr-front.png',
  },
  {
    timestamp: '07/05/2025 07:05:38 PM', lane: 1, direction: 'Inbound',
    plateNumber: 'A320008', vehicleType: 'Car', vehicleClass: 'Class 1',
    speed: 76.0, length: 4.1, axles: 2, confidence: 98,
    paymentStatus: 'Paid', snapshotUrl: 'assets/feeds/anpr-front.png',
  },
  {
    timestamp: '07/05/2025 07:05:38 PM', lane: 1, direction: 'Inbound',
    plateNumber: 'A330002', vehicleType: 'Truck', vehicleClass: 'Class 3',
    speed: 53.5, length: 12.6, axles: 3, confidence: 95,
    paymentStatus: 'Paid', snapshotUrl: 'assets/feeds/anpr-front.png',
  },
  {
    timestamp: '07/05/2025 07:05:38 PM', lane: 1, direction: 'Inbound',
    plateNumber: 'A440009', vehicleType: 'Bus', vehicleClass: 'Class 3',
    speed: 65.2, length: 10.8, axles: 2, confidence: 96,
    paymentStatus: 'Paid', snapshotUrl: 'assets/feeds/anpr-front.png',
  },
];
