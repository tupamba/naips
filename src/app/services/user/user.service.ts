import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../../models/game/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User[]>(null);
  private currentUsers:User[];
  constructor(public firestore: AngularFirestore) { }
  getObserverUsers(): Observable<User[]>
  {
    this.firestore.collection<User>("users").valueChanges().subscribe((result) =>
    {
        this.currentUsers = result;
        this.userSubject.next(this.currentUsers);
    });
    return this.userSubject.asObservable();    
  }
  getUsersforName(name:string)
  {
    if(name == "")
       return;
    else
    {
        var users = this.currentUsers.filter(x => x.user.name.includes(name));
        this.userSubject.next(users);
    }
  }
}
