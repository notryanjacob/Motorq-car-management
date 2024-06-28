import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  private durationButton = new BehaviorSubject<string>("Today");
  currentDurationButton$ = this.durationButton.asObservable();

  setCurrentDurationButton(durationBtn: string) {
    this.durationButton.next(durationBtn);
  }

}
