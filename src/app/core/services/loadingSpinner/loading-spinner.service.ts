import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
/** le service avertit sur l'état de chargement de la demande request
 * ce service est utilisé avec le spinner component
 * deux état possible
 * start => true
 * complete => false
 */
@Injectable({
  providedIn: 'platform',
})
export class LoadingSpinnerService {
  state = new BehaviorSubject(false);
  constructor() {}
/** lancement du début de la demande */
  start() {
    this.state.next(true);
  }
  /** fin de la demande */
  complete() {
    this.state.next(false);
  }
  /** retourne le composant à observer */
  getState(): Observable<boolean> {
    return this.state;
  }
}
