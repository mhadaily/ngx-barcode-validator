import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isDarkTheme: boolean = false;
  title: string = 'Angular Barcode Scanner and Validator Using Observable (RxJS)';
  fork: string = 'FORK ME!';
}
