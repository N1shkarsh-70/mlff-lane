import { Injectable, signal, computed } from '@angular/core';
import { LiveFeed } from '../models/live-feed.model';
import { LIVE_FEEDS } from '../data/mock-data';

@Injectable({ providedIn: 'root' })
export class LiveFeedService {
  private _feeds = signal<LiveFeed[]>(LIVE_FEEDS);

  feeds = this._feeds.asReadonly();

  lane1Feeds = computed(() => this._feeds().filter(f => f.lane === 1));
  lane2Feeds = computed(() => this._feeds().filter(f => f.lane === 2));

  getFeedsByLane(lane: number): LiveFeed[] {
    return this._feeds().filter(f => f.lane === lane);
  }

  toggleFullscreen(element: HTMLElement): void {
    if (!document.fullscreenElement) {
      element.requestFullscreen().catch(err => {
        console.warn('Fullscreen not supported:', err);
      });
    } else {
      document.exitFullscreen();
    }
  }
}
