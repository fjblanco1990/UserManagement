import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserAuthGuard implements CanActivate {
  private logUrl: string;
  constructor(
    private UserService: UserService,
  ) {}

  canActivate(): boolean {
      return true;
  }
}
