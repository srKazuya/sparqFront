import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhoneVerificationComponent } from './phone-verification/phone-verification.component'; 

export const routes: Routes = [
  { path: '', component: PhoneVerificationComponent },
  { path: 'home', component: HomeComponent } // Главная страница после верификации
];
