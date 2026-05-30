import { Component, inject } from '@angular/core';
import { LiveFeedService } from '../../services/live-feed.service';
import { FeedPanelComponent } from './feed-panel/feed-panel.component';

@Component({
  selector: 'app-live-view',
  standalone: true,
  imports: [FeedPanelComponent],
  templateUrl: './live-view.component.html',
  styleUrl: './live-view.component.css',
})
export class LiveViewComponent {
  liveFeedService = inject(LiveFeedService);
}
