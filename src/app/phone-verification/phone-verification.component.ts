import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Импортируем CommonModule
import { Router } from '@angular/router'; // Импортируем Router


@Component({
  selector: 'app-phone-verification',
  standalone: true,
  templateUrl: './phone-verification.component.html',
  // styleUrls: ['./phone-verification.component.css'],
  imports: [CommonModule, FormsModule] // Добавляем CommonModule здесь
})
export class PhoneVerificationComponent {
  phoneNumber: string = '';
  verificationCode: string = '';
  isCodeSent: boolean = false;
  phoneError: string = '';
  generatedCode: string = '';


  constructor(private router: Router) {} // Добавляем Router в конструктор

  sendCode() {
    if (this.isValidPhoneNumber(this.phoneNumber)) {
      this.generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
      console.log('Сгенерированный код:', this.generatedCode);
      setTimeout(() => {
        console.log('Код отправлен на номер:', this.phoneNumber);
        this.isCodeSent = true;
        this.phoneError = '';
      }, 2000);
    } else {
      this.phoneError = 'Пожалуйста, введите корректный номер телефона.';
    }
  }

  isValidPhoneNumber(phone: string): boolean {
    const phoneRegex = /^\d{10}$/; // Регулярное выражение для 10-значного номера
    return phoneRegex.test(phone);
  }

  verifyCode() {
    if (this.verificationCode === this.generatedCode) {
      console.log('Код подтвержден. Верификация прошла успешно!');
      this.router.navigate(['/home']);
    } else {
      console.log('Неверный код. Попробуйте еще раз.');
    }
  }
}
