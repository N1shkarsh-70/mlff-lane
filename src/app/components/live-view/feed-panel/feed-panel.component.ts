import { Component, input, inject, ElementRef, viewChild } from '@angular/core';
import { LiveFeed } from '../../../models/live-feed.model';
import { LiveFeedService } from '../../../services/live-feed.service';
import { ClockService } from '../../../services/clock.service';

@Component({
  selector: 'app-feed-panel',
  standalone: true,
  templateUrl: './feed-panel.component.html',
  styleUrl: './feed-panel.component.css',
})
export class FeedPanelComponent {
  feed = input.required<LiveFeed>();
  feedElement = viewChild<ElementRef>('feedContainer');
  liveFeedService = inject(LiveFeedService);
  clockService = inject(ClockService);

  onFullscreen(): void {
    const el = this.feedElement()?.nativeElement;
    if (el) {
      this.liveFeedService.toggleFullscreen(el);
    }
  }

  getMetricLabel(): string {
    const f = this.feed();
    if (f.resolution) return 'Resolution:';
    if (f.latency) return 'Latency:';
    return '';
  }

  getMetricValue(): string {
    const f = this.feed();
    return f.resolution || f.latency || '';
  }
}
