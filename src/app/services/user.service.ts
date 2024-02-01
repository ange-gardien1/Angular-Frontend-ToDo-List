import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  databaseUrl: string ="http://localhost:5266/api/user";
  private token: string = 'myFinalProjectToken';
  private _isLoggedIn = new BehaviorSubject(false);
  isLoggedIn = this._isLoggedIn.asObservable();


  constructor(private http:HttpClient) { 

    if (localStorage.getItem(this.token)) {
      this._isLoggedIn.next(true);
  }
  }

  signup(newUser: User)
  {
    delete newUser.createdOn;
     return this.http.post(this.databaseUrl + '/register',newUser);
  }

  login(Email: string, Password: string)
  {
      let querryParams = new HttpParams();
      querryParams = querryParams.append('email', Email);
      querryParams = querryParams.append('password',Password);
      return this.http.get(`${this.databaseUrl}/login`, {params: querryParams, responseType:'text'})
      .pipe(tap((response:any)=>{
       
        localStorage.setItem(this.token, response);
        
        if (response) {
          this._isLoggedIn.next(true);
        }
        else {
            this._isLoggedIn.next(false);
        }
      }));
      
  }

  logout() {
    localStorage.removeItem(this.token);
    this._isLoggedIn.next(false);
  }

  getCurrentUser(): Observable<User> {
    let reqHeaders = {
        Authorization: `Bearer ${localStorage.getItem(this.token)}`
    }

    return this.http.get<User>(`${this.databaseUrl}/current`, { headers: reqHeaders })
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.databaseUrl}/${id}`)
  }

  searchUsers(searchText: string): Observable<User[]> {
      return this.http.get<User[]>(`${this.databaseUrl}/search/${searchText}`)
  }
  Singout(){
    localStorage.removeItem(this.token);
   this._isLoggedIn.next(false);
  }
  getUseById(): Observable<User>
{
  let reqHeaders = {
    Authrization: `Bearer ${localStorage.getItem(this.token)}
    `
  }
  return this.http.get<User>(`${this.databaseUrl}/current`,{headers:reqHeaders})
}

}
