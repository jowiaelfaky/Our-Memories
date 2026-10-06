import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from '../services/memory'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html', // اتعدلت هنا عشان تطابق ملفاتك
  styleUrls: ['./login.css']   // واتعدلت هنا كمان
})
export class LoginComponent {
  secretDate: string = '';
  errorMessage: boolean = false;

  constructor(private memoryService: MemoryService, private router: Router) {}

  onLogin() {
    if (this.memoryService.login(this.secretDate)) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = true;
    }
  }
}