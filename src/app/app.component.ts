import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Убедитесь, что это указано
  imports: [RouterModule], // Импортируйте RouterModule здесь
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {}
