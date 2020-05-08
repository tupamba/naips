import { UserLogin } from '../../models/authentication/userLogin';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { auth } from 'firebase/app';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<UserLogin>(null);
  private currentUser:UserLogin;
  constructor(public auth: AngularFireAuth,
    public firestore: AngularFirestore) { }
  getUser(): Observable<UserLogin>
  {
    return this.userSubject.asObservable();
  }
  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).
    then((result) =>
    {
      this.currentUser = new UserLogin(result.user.uid, result.user.displayName);
      var userItems = this.firestore.collection('users');
      userItems.doc<UserLogin>(this.currentUser.id).set(Object.assign({}, this.currentUser));
      this.userSubject.next(this.currentUser);
    });
  }
  logout() {
    this.auth.signOut().then((result) =>
    {
      var userItems = this.firestore.collection('users');
      userItems.doc<UserLogin>(this.currentUser.id).delete();
      this.currentUser = null;
      this.userSubject.next(this.currentUser);
    });
  }
  getCurrentUser(): UserLogin
  {
    return this.currentUser;
  }
}
