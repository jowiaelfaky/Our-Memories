import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MemoryService } from '../services/memory';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private memoryService: MemoryService, private router: Router) {}

  canActivate(): boolean {
    if (this.memoryService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}