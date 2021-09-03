import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: ActivatedRoute) {}
  private url = 'https://api.github.com';



  getUsers() {
    return this.http
      .get(`${this.url}/users?per_page=10`)
      .pipe(map((infoUser) => infoUser));
  }

  getUsersByLogin(login: string) {
    return this.http
      .get(`${this.url}/users/${login}`)
      .pipe(map((infoUser) => infoUser));
  }

  getUsersByFollower(login: string) {
    return this.http
      .get(`${this.url}/users/${login}`)
      .pipe(map((infoUser) => infoUser));
  }


  // isAuth(userJson: number) {
  //  return  this.http
  //       .get(`${this.url}/users/${userJson}`)
  //       .pipe(
  //         tap((infoUser: any) => console.log('SCORE' + infoUser['score'])),
  //         map((infoUser: any) => infoUser )
  //         );
  //  }

}
