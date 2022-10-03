import { BusRouteEvent } from './../interfaces/BusRouteEvent';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private dbPath:string = '/busrouteevents';
  busRouteEventsRef!: AngularFireList<any>;
  
  constructor(private db:AngularFireDatabase) { 
    this.busRouteEventsRef = db.list(this.dbPath);
  }

  createEvent(busRouteEvent:BusRouteEvent) {
    return this.busRouteEventsRef.push(busRouteEvent);
  }

  async getAll() {
    return this.busRouteEventsRef.snapshotChanges()
      .pipe(
        map(changes => 
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  update(key:string, value:BusRouteEvent) : Promise<void> {
    return this.busRouteEventsRef.update(key,value);
  }

  delete(key:string) : Promise<void> {
    return this.busRouteEventsRef.remove(key);
  }
}
