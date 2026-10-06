import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {
  // تاريخ ارتباطهم هنا
  private readonly SECRET_DATE = '2023-05-15'; 
  
  private authenticated = false;

  constructor() { }

  login(dateInput: string): boolean {
    if (dateInput === this.SECRET_DATE) {
      this.authenticated = true;
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}