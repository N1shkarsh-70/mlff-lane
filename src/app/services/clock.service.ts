import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ClockService {
  private _currentTime = signal(new Date());

  currentTime = this._currentTime.asReadonly();

  formattedTime = computed(() => {
    const d = this._currentTime();
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  });

  formattedDate = computed(() => {
    const d = this._currentTime();
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  });

  formattedDateTime = computed(() => {
    return `${this.formattedDate()}, ${this.formattedTime()}`;
  });

  constructor() {
    setInterval(() => {
      this._currentTime.set(new Date());
    }, 1000);
  }
}
