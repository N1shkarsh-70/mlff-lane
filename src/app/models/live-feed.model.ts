export interface LiveFeed {
  id: string;
  name: string;
  type: 'anpr-front' | 'anpr-back' | 'surveillance' | 'radar-4d' | 'lidar-3d';
  lane: number;
  imageUrl: string;
  isLive: boolean;
  resolution?: string;
  latency?: string;
  timestamp: string;
}
