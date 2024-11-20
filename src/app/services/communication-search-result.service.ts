import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationSearchResultService {
  private term$ = new BehaviorSubject('');

  constructor() {}

  setTerm(term: string) {
    this.term$.next(term);
  }
  getTerm() {
    return this.term$.asObservable();
  }
}
